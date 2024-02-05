let searchBtn = document.getElementById("search");
        let textinput = document.getElementById("textinput");
        let m2 = document.getElementById("m2")
        

        searchBtn.addEventListener("click", async ()=> {
            const url =`https://sephora.p.rapidapi.com/us/products/v2/search?q=${textinput.value}&pageSize=60&currentPage=1`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "20f0a9e35fmshf3edfd4c2b8b193p145be7jsnc3c90ae4c18b",
            "X-RapidAPI-Host": "sephora.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);
          showData(result);
        } catch (error) {
          console.error(error);
        }
      });

      function showData(data){
        m2.innerHTML=''
        let products = data.products
        products.forEach(product => {
            console.log(product);

            let card = document.createElement('div')
            card.classList.add("card")
            card.innerHTML = `
            <img src="${product.image450}" alt="${product.displayName}">
            <p>${product.displayName}</p>
            `

            m2.appendChild(card)
           
            
        });
      }
       