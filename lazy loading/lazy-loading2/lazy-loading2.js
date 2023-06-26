const container = document.querySelector(".container") 

getImages = ()=>{
  let fragment = document.createDocumentFragment()
  fetch("https://picsum.photos/v2/list?page=2&limit=5")
    .then(res => res.json())
    .then(data => {
      data.forEach((item)=>{
        let img = document.createElement("img")
        img.src = item.download_url
        fragment.appendChild(img)
      })
      container.appendChild(fragment)
      setObserver()
    })
}



const callback = (entries)=>{
  entries.forEach(entry=>{
    if (entry.isIntersecting){
      getImages()
    }
  })
}



const setObserver = ()=>{
  const options = {
    threshold : 0.5
  }
  const observer = new IntersectionObserver(callback, options)
  observer.observe(container.lastElementChild)
}


getImages()



