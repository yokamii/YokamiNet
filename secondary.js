    const bootScreen = document.getElementById('boot-screen');
    const bootSound = document.getElementById('boot-sound');

    function startBoot() {
        bootSound.play().catch(e => console.log("Audio play blocked"));
    }

    startBoot();