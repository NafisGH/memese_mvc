class View {
    constructor() {
        this.memsNode = document.querySelector(".column-setup__mems")
        this.wrapperMemesNode = document.querySelector(".__select__content")
    }

    render(mems) {
        mems.forEach((mem) => {

            const nameMem = document.createElement("p");
            nameMem.classList.add("__select__option")



            nameMem.textContent = mem.name;
            this.wrapperMemesNode.append(nameMem)

            this.memsNode.append(this.wrapperMemesNode)
            
            

            // console.log(mem)
        })


        
    }
}