from flask import Flask, render_template, request, redirect, url_for
import pyodbc

app = Flask(__name__)

@app.route('/cadastrar', methods=['POST', 'GET'])
def cadastrar():
    if request.method == 'POST':
        dados_conexao = (
            "DRIVER={MySQL ODBC 9.0 Unicode Driver};"
            "SERVER=localhost;"
            "DATABASE=cadastro;"
            "UID=root;"
            "PWD=232408#;"
            "CHARSET=utf8mb4;"
        )

        conexao = pyodbc.connect(dados_conexao)
        cursor = conexao.cursor()

        comando = """INSERT INTO livros (capa_livro, nome_livro, desc_livro, autor_livro, pag_livro, editor_livro, ano_livro, genero_livro) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)"""

        capa_livro = request.form['capa']
        nome_livro = request.form['nome']
        desc_livro = request.form['descricao']
        autor_livro = request.form['autor']
        pag_livro = request.form['numpag']
        editora_livro = request.form['editora']
        ano_livro = request.form['ano']
        genero_livro = request.form['genero'].rstrip()

        valores = (capa_livro, nome_livro, desc_livro, autor_livro, pag_livro, editora_livro, ano_livro, genero_livro)


        cursor.execute(comando, valores)
        conexao.commit()
        cursor.close()
        conexao.close()

        return redirect(url_for('cadastrar'))
    
    return render_template('cadastro.html')

if __name__ == "__main__":
    app.run(debug=True)


""" pyinstaller --onefile --add-data "static:static" --add-data "templates:templates" app.py """