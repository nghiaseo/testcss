window.onload = function() {
    let prevMouseX = null
        let prevMouseY = null
    function heart(event) {        
        if(prevMouseX !== null && prevMouseY !== null){
            const deltaX = event.pageX - prevMouseX
            const deltaY = event.pageY - prevMouseY
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
            console.log(distance)
            if(distance >= 100){
                createHearts(event.pageX, event.pageY)
                prevMouseX = event.pageX
                prevMouseY = event.pageY                
            }
        }
        else {
            createHearts(event.pageX, event.pageY)
            prevMouseX = event.pageX
            prevMouseY = event.pageY
        }
    }
    
    function createHearts(x,y){
        const h = document.createElement('i')
        h.classList.add('heart')
        h.style.top = y + 'px'
        h.style.left = x + 'px'
        h.style.scale = Math.random() * 2 +1
        h.style.setProperty('--x',getRandom())
        h.style.setProperty('--y',getRandom())

        document.body.appendChild(h)
        setTimeout(() => {
            h.remove()
        }, 2000)
    }
    function getRandom(){
        const result = Math.random() * 400 - 200 + 'px'
        console.log(result)
        return result
    }

    document.addEventListener('mousemove', heart)
}