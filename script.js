<script>
    document.addEventListener("DOMContentLoaded", function() {
        const player = document.getElementById('player');
        const maze = document.getElementById('maze');
        const walls = document.querySelectorAll('.wall');

        let isGameOver = false;

        // Startpositie van de speler
        let playerLeft = 0;
        let playerTop = 0;

        // Event listener voor toetsenbordbediening
        document.addEventListener('keydown', function(event) {
            if (!isGameOver) {
                const key = event.key;
                let newLeft = playerLeft;
                let newTop = playerTop;

                // Beweeg de speler op basis van toetsaanslagen
                switch (key) {
                    case 'ArrowUp':
                        newTop -= 40;
                        break;
                    case 'ArrowDown':
                        newTop += 40;
                        break;
                    case 'ArrowLeft':
                        newLeft -= 40;
                        break;
                    case 'ArrowRight':
                        newLeft += 40;
                        break;
                }

                // Controleer of de nieuwe positie van de speler in de muur is
                for (const wall of walls) {
                    const wallRect = wall.getBoundingClientRect();
                    const playerRect = player.getBoundingClientRect();
                    if (newLeft === wallRect.left && newTop === wallRect.top &&
                        playerRect.right === wallRect.right && playerRect.bottom === wallRect.bottom) {
                        return; // stop beweging als speler tegen de muur botst
                    }
                }

                // Controleer of de speler het doel heeft bereikt
                if (newLeft === 320 && newTop === 240) {
                    alert('Gefeliciteerd! Je hebt het doel bereikt!');
                    isGameOver = true;
                    return;
                }

                // Update de positie van de speler
                playerLeft = newLeft;
                playerTop = newTop;
                player.style.left = playerLeft + 'px';
                player.style.top = playerTop + 'px';
            }
        });
    });
</script>
