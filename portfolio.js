const projects = [
  {
    desc: `IEEE CS Chapter Website is a modern and 
                    responsive web platform built to represent 
                    the chapter’s vision, activities, and community.
                    Designed with a clean and intuitive interface, 
                    it provides seamless navigation across sections 
                    such as events, team, and resources. With a 
                    focus on frontend design, the project highlights 
                    expertise in creating engaging layouts, interactive 
                    elements, and user-friendly experiences. 
                    The platform not only strengthens the chapter’s 
                    online presence but also reflects professional web 
                    development practices in both design and usability.`,
    image: "assets/pimg1.png",
    link: "https://ieeecsvit.com/"
  },
  {
    desc: `Hack Battle Website is an interactive event 
            platform built to manage and enhance the 
            hackathon experience. Beyond providing 
            event details and schedules, it allows 
            registered participants to seamlessly form 
            teams, collaborate, and choose problem 
            statements directly through the platform. 
            With a responsive and modern frontend design
            , the website ensures smooth navigation and 
            real-time interaction for users. This project 
            highlights expertise in creating user-focused 
            features, intuitive interfaces, and scalable solutions 
            that make organizing and participating in large
            hackathons more efficient and engaging.`,
    image: "assets/image 7.png",
    link: "https://hackbattle25.ieeecsvit.com/"
  },
  {
    desc: `BattleCode Website is an interactive platform 
            built to host a fast-paced one-on-one coding 
            competition. Participants face opponents in 
            head-to-head battles, with each stage introducing 
            a unique strategic twist that tests their skills to the 
            limit. The website features a sleek and responsive 
            frontend design, ensuring smooth navigation, 
            real-time engagement, and an exciting user 
            experience. Contributing to the frontend, the project 
            highlights expertise in crafting dynamic interfaces 
            that capture the competitive spirit while maintaining 
            usability and performance.`,
    image: "assets/image6.png",
    link: "https://www.figma.com/design/m025yqp3RTEF14ABW1DKNp/BattleCode-Gravitas-25?node-id=0-1&p=f&t=Sw3vHOBv4Jg4357u-0"
  },
  {
    desc: `Cloud Analyzer is a security-focused framework 
            designed to enhance the safety of modern cloud
            applications. It analyzes third-party libraries 
            and dependencies, detecting any known 
            vulnerabilities that could pose risks during 
            deployment. By providing developers with 
            actionable insights, the tool empowers teams 
            to proactively address security issues, reduce
            exposure to attacks, and ensure more reliable 
            software delivery. The project showcases expertise
            in cloud application security, dependency 
            management, and building practical tools that 
            integrate seamlessly into the development lifecycle.`,
    image: "assets/image 8.png",
    link: "https://c-analyse.vercel.app/"
  },
  {
  desc: `
    <div style="
      height:100%;
      margin-left:160px;
      margin-top:30px;
    ">
      <div style="
        font-size:36px;
        font-weight:800;
        letter-spacing:0.15em;
        text-align:center;
        color:#111;
      ">
        MORE PROJECTS
      </div>

      <div style="
        margin-top:18px;
        font-size:16px;
        font-weight:400;
        text-align:center;
        color:#555;
        line-height:1.8;
      ">
        Exciting work is currently in progress.<br>
        Stay tuned for upcoming updates.
      </div>
    </div>
  `,
  image: "",
  link: ""
}

];

let currentIndex = 0;

const descEl = document.getElementById("project-desc");
const imgEl = document.getElementById("project-image");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.getElementById("nextBtn");

descEl.style.transition = "opacity 0.35s ease, transform 0.35s ease";
imgEl.style.transition = "opacity 0.35s ease, transform 0.35s ease";

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
}

const linkEl = document.getElementById("project-link");

function updateProject(index) {
  descEl.style.opacity = "0";
  imgEl.style.opacity = "0";

  setTimeout(() => {
    if (projects[index].image === "") {
  imgEl.style.display = "none";
  linkEl.style.display = "none";   
} else {
  imgEl.style.display = "block";
  linkEl.style.display = "inline-block";
}
    descEl.innerHTML = projects[index].desc;
    imgEl.src = projects[index].image;
    linkEl.href = projects[index].link;  

    descEl.style.opacity = "1";
    imgEl.style.opacity = "1";

    updateDots(index);
  }, 300);
}


nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  updateProject(currentIndex);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentIndex = Number(dot.dataset.index);
    updateProject(currentIndex);
  });
});







const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu-item");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  menuItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: .6 }); 

reveals.forEach(el => observer.observe(el));





const page6 = document.getElementById("page6");
const ball = document.getElementById("ball");
const thankyou = document.getElementById("thankyou");
const backToTop = document.getElementById("backToTop");

let animationPlayed = false;

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function startAnimation() {
  if (animationPlayed) return;
  animationPlayed = true;


  resetAnimationInstant();


  ball.style.animation = "dropBall 1.5s ease-out forwards";


  setTimeout(() => {
    thankyou.style.opacity = 1;
  }, 1500);


  setTimeout(() => {
    ball.style.animation = "rollShrink 2s ease-in-out forwards";
  }, 3000);


  setTimeout(() => {
    ball.style.display = "none";
    backToTop.classList.remove("hidden");
    backToTop.classList.add("visible");
  }, 5000);
}

function resetAnimationInstant() {
  ball.style.animation = "none";
  ball.style.display = "block";
  thankyou.style.opacity = 0;
  backToTop.classList.add("hidden");
  backToTop.classList.remove("visible");


  void ball.offsetWidth;
}

function resetIfScrolledUp() {
  if (!isInViewport(page6) && animationPlayed) {
    animationPlayed = false;
    resetAnimationInstant();
  }
}


window.addEventListener("scroll", () => {
  if (isInViewport(page6)) startAnimation();
  resetIfScrolledUp();
});


backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});





window.addEventListener("load", () => {
    const loader = document.getElementById("site-loader");
    loader.style.opacity = "5";
    loader.style.visibility = "hidden";
});
