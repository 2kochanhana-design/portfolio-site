(() => {
    const typingText = document.querySelector(".typing-text");
    const typingCursor = document.querySelector(".typing-cursor");
    const imageCards = [...document.querySelectorAll(".top__image-frame")];
    const approachElements = [...document.querySelectorAll(".approach__reveal")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const text = typingText?.textContent.trim() || "";
    const imageRiseTime = 1350;
    const imageHoldTime = 1800;

    const wait = (time) => new Promise((resolve) => window.setTimeout(resolve, time));

    const startTyping = async () => {
        if (!typingText || !typingCursor) return;

        if (reducedMotion) {
            typingText.style.clipPath = "none";
            typingCursor.hidden = true;
            return;
        }

        await document.fonts?.ready;

        const measure = document.createElement("canvas").getContext("2d");
        const styles = getComputedStyle(typingText);
        measure.font = `${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;

        const measuredFullWidth = measure.measureText(text).width;
        const renderedFullWidth = typingText.getBoundingClientRect().width;
        const setTypingProgress = (index) => {
            const measuredCurrentWidth = measure.measureText(text.slice(0, index)).width;
            const currentWidth = renderedFullWidth * (measuredCurrentWidth / measuredFullWidth);
            const hiddenWidth = Math.max(0, renderedFullWidth - currentWidth);

            typingText.style.clipPath = index === text.length
                ? "none"
                : `inset(0 ${hiddenWidth}px 0 0)`;
            typingCursor.style.left = `${currentWidth}px`;
        };

        while (true) {
            for (let index = 0; index <= text.length; index += 1) {
                setTypingProgress(index);
                await wait(85);
            }

            await wait(1800);

            for (let index = text.length - 1; index >= 0; index -= 1) {
                setTypingProgress(index);
                await wait(45);
            }

            await wait(500);
        }
    };

    const showCard = (card, index) => {
        card.style.zIndex = index + 1;
        card.classList.remove("is-reset", "is-visible");

        // 初期位置を描画してから、下からの表示を開始する。
        void card.offsetWidth;
        card.classList.add("is-visible");
    };

    const resetCards = () => {
        imageCards.forEach((card) => {
            card.classList.remove("is-visible", "is-leaving");
            card.classList.add("is-reset");
        });
    };

    const playImageSequence = async () => {
        for (const [index, card] of imageCards.entries()) {
            showCard(card, index);
            await wait(imageRiseTime);
        }

        await wait(imageHoldTime);
    };

    const startImageLoop = async () => {
        if (imageCards.length === 0) return;

        if (reducedMotion) {
            imageCards.forEach((card, index) => {
                card.classList.add("is-visible");
                card.style.zIndex = index + 1;
            });
            return;
        }

        while (true) {
            await playImageSequence();
            resetCards();
        }
    };

    const revealApproach = () => {
        if (reducedMotion) {
            approachElements.forEach((element) => element.classList.add("is-visible"));
            return;
        }

        const revealOnScroll = () => {
            if (window.scrollY <= 0) return;

            const revealPoint = window.innerHeight * 0.85;

            approachElements.forEach((element) => {
                if (element.getBoundingClientRect().top < revealPoint) {
                    element.classList.add("is-visible");
                }
            });

            if (approachElements.every((element) => element.classList.contains("is-visible"))) {
                window.removeEventListener("scroll", revealOnScroll);
            }
        };

        window.addEventListener("scroll", revealOnScroll, { passive: true });
    };

    startTyping();
    startImageLoop();
    revealApproach();
})();
