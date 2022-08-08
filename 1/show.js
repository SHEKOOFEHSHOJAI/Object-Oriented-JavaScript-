const form = document.querySelector("#searchForm");


form.addEventListener("submit",async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;

    // console.log(searchTerm);
    const config={params:{q:searchTerm}}
    // console.log(config);
    const res=await axios.get(`http://api.tvmaze.com/search/shows`, config)
    console.log(res.data);
    makeImg(res.data)
    form.elements.query.value=""
})

const makeImg=shows=>{
    for (const iterator of shows) {
        if (iterator.show.image) {

        const img=document.createElement("IMG")
        img.src=show.image.medium;
        document.body.append(img)
        
        }
        
    }
}