from flask import Flask, render_template, request, url_for
import pyodbc

app = Flask(__name__)

def db_connect():
    dados_conexao = (
            "DRIVER={MySQL ODBC 9.1 Unicode Driver};"
            "SERVER=localhost;"
            "DATABASE=cadastro;"
            "UID=root;"
            "PWD=;"
        )
    return pyodbc.connect(dados_conexao)

@app.route('/pagina-inicial.html')
def livros():
    conexao = db_connect()
    cursor = conexao.cursor()

    comando = """ SELECT id_livro, capa_livro, nome_livro, ano_livro FROM livros """
    cursor.execute(comando)

    livros = cursor.fetchall()

    cursor.close()
    conexao.close()

    return render_template('Pagina-inicial.html', livros=livros)

@app.route('/livro/<int:livro_id>')
def livro_descricao(livro_id):
    conexao = db_connect()
    cursor = conexao.cursor()

    comando = "SELECT * FROM livros WHERE id_livro = ?"
    cursor.execute(comando, (livro_id,))
    livro = cursor.fetchone()

    cursor.close()
    conexao.close()
    
    if livro is None:
        return "Livro não encontrado", 404
    
    return render_template('Descrição.html', livro=livro)

@app.route('/genero/<string:genero>')
def livros_por_genero(genero):
    conexao = db_connect()
    cursor = conexao.cursor()

    comando = "SELECT id_livro, capa_livro, nome_livro, desc_livro, autor_livro, ano_livro FROM livros WHERE genero_livro = ?"
    cursor.execute(comando, (genero,))
    livros = cursor.fetchall()

    cursor.close()
    conexao.close()
    
    return render_template('livros_por_genero.html', livros=livros, genero=genero)

@app.route('/categorias.html')
def categorias():
    return render_template('categorias.html')

if __name__ == "__main__":
    app.run(debug=True)
