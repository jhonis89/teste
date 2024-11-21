import pyautogui as pag
import pandas as pd
import pyperclip
import time

link = "http://localhost:5000/cadastrar"
planilha = pd.read_csv("C:/Users/CepLabInformatica/Documents/GitHub/Biblioteca/Biblioteca/jhonatan/planilha.csv", encoding='utf-8')

pag.PAUSE = 0.1
pag.press("win")
pag.write("edge")
time.sleep(2)
pag.press("Enter")
time.sleep(2)
pag.write(link)
pag.press("enter")
time.sleep(2)

for linhas in planilha.index:
    pag.press("tab")
    texto = str(planilha.loc[linhas, "CAPA"])
    pyperclip.copy(texto) 
    pag.hotkey("ctrl", "v") 
    pag.press("tab")

    texto = str(planilha.loc[linhas, "NOME"])
    pyperclip.copy(texto)
    pag.hotkey("ctrl", "v")
    pag.press("tab")

    texto = str(planilha.loc[linhas, "DESC"])
    pyperclip.copy(texto)
    pag.hotkey("ctrl", "v")
    pag.press("tab")

    texto = str(planilha.loc[linhas, "AUTOR"])
    pyperclip.copy(texto)
    pag.hotkey("ctrl", "v")
    pag.press("tab")

    texto = str(planilha.loc[linhas, "NP"])
    pyperclip.copy(texto)
    pag.hotkey("ctrl", "v")
    pag.press("tab")
    
    texto = str(planilha.loc[linhas, "EDITORA"])
    pyperclip.copy(texto)
    pag.hotkey("ctrl", "v")
    pag.press("tab")

    texto = str(planilha.loc[linhas, "ANO"])
    pyperclip.copy(texto)
    pag.hotkey("ctrl", "v")
    pag.press("tab")

    texto = str(planilha.loc[linhas, "GÊNERO"]).rstrip()
    pyperclip.copy(texto)
    pag.hotkey("ctrl", "v")
    pag.press("tab")

    pag.press("enter")
    time.sleep(1.5)
