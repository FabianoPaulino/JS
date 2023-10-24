const bt = document.querySelector("#btn_imp")
const tb = document.querySelector("#tabela")

bt.addEventListener("click", ()=>{
   const content = document.querySelector("#tabela").innerHTML
   let estilo = "<style>";
   estilo+= "table {width: 300px;font: 17px calibri;}"
   estilo+= "table, th, td {border: solid 1px rgb(14, 3, 3); border-collapse: collapse; padding: 2px 2px;text-align: center;}"
   estilo+= "</style>"
   const win = window.open('', '', 'heigth = 700, width = 700')
   win.document.write('<html><head>')
   win.document.write('<title>89 imprirmir</title>')
   win.document.write(estilo)
   win.document.write('</head>')
   win.document.write('<body>')
   win.document.write(content)
   win.document.write('</body></html>')
   win.print()
   win.close()
})
