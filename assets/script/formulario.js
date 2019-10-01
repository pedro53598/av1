        let i= 0;
        let k =0;
       function formChildren(){

        let div = document.createElement('div');

        div.innerHTML = `
        <fieldset>
        <label for="task-1">Nome do filho(a):</label><input type="text" id="task-1" class="name" style"color:black !important" name="name-${i++}" placeholder="Digite o nome"/><input style='color:black !important' type="button" value="Adicionar" id="add" /></br>
        <label for="task-2">Idade do filho(a):</label><input type="number" class="idade" id="task-2" style"color:black !important" name="idade-${k++}"/><button id="del" style='color:black !important' >Excluir</button>
        </fieldset>
        `;

        document.querySelector('.todo').append(div);

        div.querySelector('#add').addEventListener("click", formChildren);

        div.querySelector('#del').addEventListener("click", e=>{
            div.remove();
        });
    }

    document.querySelector('#yes').addEventListener("change", formChildren);

    document.querySelector('#no').addEventListener('change', e=>{

        document.querySelector('.todo').innerHTML ='';

    });

   
