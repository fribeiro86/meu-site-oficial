     document.querySelectorAll(".faq-item").forEach(item => {
            const btn = item.querySelector(".faq-question");
            const ans = item.querySelector(".faq-answer");
            btn.addEventListener("click", () => {
                const isOpen = item.classList.contains("open");
                document.querySelectorAll(".faq-item.open").forEach(openItem => {
                    openItem.classList.remove("open");
                    openItem.querySelector(".faq-answer").style.maxHeight = null;
                });
                if (!isOpen) {
                    item.classList.add("open");
                    ans.style.maxHeight = ans.scrollHeight + "px";
                }
            });
        });

        const revealEls = document.querySelectorAll(".problem-card, .solution-card, .method-step, .credential, .testimonial-card, .risk-card, .service-card");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: .08 });
        revealEls.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "opacity .6s ease, transform .6s ease";
            observer.observe(el);
        });
 