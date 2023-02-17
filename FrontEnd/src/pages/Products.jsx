import React, { useEffect, useState } from 'react'







const Products = () => {
const [loading, setLoading] = useState(false)
const [articles, setArticles] = useState([])

useEffect(() => {
const loadArticles= async()=>{
setLoading(true)
const response= await axios.get("api/articles")
setArticles(response.data)
setLoading(false)
}  
loadArticles()
}, [])

  return (
    <div>
 <main class="main">
        <section class="main__offerts"></section>
        <section class="main__hot-products">
           <div class="hot-products-title"><h2>Productos en Promocion</h2></div> 
            <div class="box-products">
                <div class="card-product">
                    <div class="card-product__image">
                        {/* <img src="https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/279736461_137365692320156_7224190129766719884_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GswUYb_bIKEAX_avidb&_nc_ht=scontent.ftuc1-2.fna&oh=00_AfA18rFqs0phFJ3Ru-x2fRJB3PQw1-KfpEwY7TQ7s-DaQA&oe=6375C8E3" alt=""> */}
                    </div>
                    <div class="card-product__info">
                        <h5 class="title-product">Plantin</h5>
                        <p>Tipo:<span>Agua Dulce</span></p>
                        <p>Precio:<span>$100</span></p>
                        <p>Stock:<span>10</span><span> Unidades</span></p>
                        <p><span></span></p>
                        <div><i class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>
                <div class="card-product">
                    <div class="card-product__image">
                        {/* <img src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/305574471_148119414578117_4991339899848186557_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Yhe_YMVmToUAX9x3l9I&_nc_ht=scontent.ftuc1-1.fna&oh=00_AfDzxE1Ze-p7rc-w85FStPkprQL39oSoWENkibb7mTTOhA&oe=6375A72E" alt="" srcset=""> */}
                    </div>
                    <div class="card-product__info">
                        <h5 class="title-product">Decoracion Totem</h5>
                        <p>Tipo:<span>Agua Dulce/Salada</span></p>
                        <p>Precio:<span>$200</span></p>
                        <p>Stock:<span>10</span><span> Unidades</span></p>
                        <p><span></span></p>
                        <div><i class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>

                <div class="card-product">
                    <div class="card-product__image">
                        {/* <img src="https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/312414841_157882476935144_2944531955412217856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2BwieMOrVVcAX9lWtv-&_nc_ht=scontent.ftuc1-2.fna&oh=00_AfCFEX3aMff_6yh_tjpBzmdGj-g2OjBztAHWnc1MyETcAw&oe=63741C52" alt="granulado" srcset=""> */}
                    </div>
                    <div class="card-product__info">
                        <h5 class="title-product">Alimento Microgranulado</h5>
                        <p>Tipo:<span>Agua Dulce</span></p>
                        <p>Precio:<span>$200</span></p>
                        <p>Stock:<span>10</span><span> Unidades</span></p>
                        <p><span></span></p>
                        <div><i class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>



            </div>
        </section>
        <section class="main__products">
            <div class="products-title"><h2>Productos</h2></div> 
             <div class="box-products">
                 <div class="card-product">
                     <div class="card-product__image">
                         {/* <img src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/297078343_137363512320374_8872509462366576617_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Tts8vmxO_8MAX85L-P8&_nc_ht=scontent.ftuc1-1.fna&oh=00_AfABFSHPA7OLRXjdmq0oYnlvzWJEthlXgdxIzVcsI0bmLg&oe=6373F387" alt=""> */}
                     </div>
                     <div class="card-product__info">
                         <h5 class="title-product">Plantin</h5>
                         <p>Tipo:<span>Agua Dulce</span></p>
                         <p>Precio:<span>$100</span></p>
                         <p>Stock:<span>10</span><span> Unidades</span></p>
                         <p><span></span></p>
                         <div><i class="fa-solid fa-cart-shopping"></i></div>
                     </div>
                 </div>
                 <div class="card-product">
                     <div class="card-product__image">
                         {/* <img src="https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/297869023_137363478987044_5696773577559493238_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=t5hTpPAdU-cAX95Zc-x&_nc_ht=scontent.ftuc1-2.fna&oh=00_AfBjYgeUt4IA6x_HeTParyjjlxVG-pRsGSz5T9pHmA1K9Q&oe=63750C25" alt="" srcset=""> */}
                     </div>
                     <div class="card-product__info">
                         <h5 class="title-product">Plantin</h5>
                         <p>Tipo:<span>Agua Dulce</span></p>
                         <p>Precio:<span>$200</span></p>
                         <p>Stock:<span>10</span><span> Unidades</span></p>
                         <p><span></span></p>
                         <div><i class="fa-solid fa-cart-shopping"></i></div>
                     </div>
                 </div>
 
                 <div class="card-product">
                     <div class="card-product__image">
                         {/* <img src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/297108608_137358292320896_4231134289062583978_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ip0CefroFlsAX9weVGJ&tn=LciVpSBMgKekSDyF&_nc_ht=scontent.ftuc1-1.fna&oh=00_AfCcvRHlrjf3VCh-v_QIx8ULV9AnVrpOiQbNXoVcjd5MLQ&oe=637550CE" alt="granulado" srcset=""> */}
                     </div>
                     <div class="card-product__info">
                         <h5 class="title-product">Pez Coridora</h5>
                         <p>Tipo:<span>Agua Dulce</span></p>
                         <p>Precio:<span>$200</span></p>
                         <p>Stock:<span>10</span><span> Unidades</span></p>
                         <p><span></span></p>
                         <div><i class="fa-solid fa-cart-shopping"></i></div>
                     </div>
                 </div>

                 <div class="card-product">
                    <div class="card-product__image">
                        {/* <img src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/297048456_136274955762563_3008536605007055311_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5SIQ3LL6oJkAX_Ko0yj&_nc_ht=scontent.ftuc1-1.fna&oh=00_AfA2B40fhQ1sL7haIVk6mXjShAECVtvpCe3Zr1bIeqF4Og&oe=6375C400" alt="granulado" srcset=""> */}
                    </div>
                    <div class="card-product__info">
                        <h5 class="title-product">Decoracion Dino</h5>
                        <p>Tipo:<span>Agua Dulce/Salada</span></p>
                        <p>Precio:<span>$200</span></p>
                        <p>Stock:<span>10</span><span> Unidades</span></p>
                        <p><span></span></p>
                        <div><i class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>

                <div class="card-product">
                    <div class="card-product__image">
                        {/* <img src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/295624315_135743682482357_649815849257959044_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Z6xC4SelAmwAX9UAFpQ&_nc_ht=scontent.ftuc1-1.fna&oh=00_AfAZD-ZrUF35H8uUJA6mrPNHP87CrHTZFi23PcL3BQELug&oe=63748A59" alt="granulado" srcset=""> */}
                    </div>
                    <div class="card-product__info">
                        <h5 class="title-product">Aireador</h5>
                        <p>Tipo:<span>Agua Dulce/Salada</span></p>
                        <p>Precio:<span>$200</span></p>
                        <p>Stock:<span>10</span><span> Unidades</span></p>
                        <p><span></span></p>
                        <div><i class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>
 
                <div class="card-product">
                    <div class="card-product__image">
                       {/* ]<img src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/294928499_133823276007731_3890608902944360895_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NuA551-9IjkAX-j7r6_&_nc_oc=AQk7XWW6fUxkGxz8g1JLILC_ZJ_2CRIpAy64rWTx6msppd7S_9rFAMbbUj2ZvHIPIwY&_nc_ht=scontent.ftuc1-1.fna&oh=00_AfC4ukeGrJE6-wVD7K9S-V5qeuw8OvWwvhSidPq93A_esw&oe=63757D5B" alt="foto de pecera" srcset=""> */}
                    </div>
                    <div class="card-product__info">
                        <h5 class="title-product">Pecera completa</h5>
                        <p>Tipo:<span>Agua Dulce</span></p>
                        <p>Precio:<span>$2200</span></p>
                        <p>Stock:<span>4</span><span> Unidades</span></p>
                        <p><span></span></p>
                        <div><i class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>
                
 
             </div>
         </section>


        <section class="main__bottom-fish"></section>
    </main>

    </div>
  )
}

export default Products
  

  