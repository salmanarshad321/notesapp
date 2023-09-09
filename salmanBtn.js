(function() {
    // Inject the button into the body
    var btn = document.createElement('button');
    btn.id = 'salmanBtn';
    btn.style.cssText = 'background-color: red; color: white; border: 1px solid red; width: 90px; height: 50px; border-radius: 2px; margin: 5px; padding: 5px; position: fixed';
    btn.innerHTML = 'Salman';
    btn.onclick = salmanButton; 
    document.body.appendChild(btn);

    let isDragging = false;

    document.getElementById('salmanBtn').addEventListener('mousedown', function(e) {
        isDragging = true;

        // The current position where the dragging started
        let startX = e.clientX - this.getBoundingClientRect().left;
        let startY = e.clientY - this.getBoundingClientRect().top;

        function doDrag(e) {
            if (!isDragging) return;

            // Calculate the new position
            let x = e.clientX - startX;
            let y = e.clientY - startY;

            // Move the button to the new position
            e.target.style.left = x + 'px';
            e.target.style.top = y + 'px';
        }

        function stopDrag() {
            isDragging = false;
            // Remove the event listeners once dragging is done
            document.removeEventListener('mousemove', doDrag);
            document.removeEventListener('mouseup', stopDrag);
        }

        // Add the event listeners
        document.addEventListener('mousemove', doDrag);
        document.addEventListener('mouseup', stopDrag);
    });

    window.salmanButton = function() {
        // Your function logic here
        alert('Salman button clicked!');
    };

})();
