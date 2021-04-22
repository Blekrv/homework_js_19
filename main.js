class PrintMachine{
    constructor (fontSize = '14px', fColor = 'black', fFamily = 'serif', text = 'Printed Text'){
        this.fontSize = fontSize,
        this.fColor = fColor,
        this.fFamily = fFamily,
        this.text = text
    }
    print(fontSize,fColor,fFamily,text){
        let $p = document.createElement('P')
        $p.style.fontSize = `${this.fontSize}`
        $p.style.color = `${this.fColor}`
        $p.style.fontFamily = `${this.fFamily}`
        $p.textContent = `${this.text}`
        document.body.appendChild($p)
    }
}
x = new PrintMachine(`${fSize.value}`,${}).print()
console.log(x)