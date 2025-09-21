/* Main Js Start */

(function ($) {
  "use strict";

  $(document).ready(function () {

    // odometer init
    if ($(".odometer").length) {
      var odo = $(".odometer");
      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    }

  });

  // preloader
  $(window).on("load", function () {
    $("#loading").fadeOut();
  })


  // sticky header
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 60) {
      $('.header').addClass('fixed-header');
    }
    else {
      $('.header').removeClass('fixed-header');
    }
  });



  // tap to top with progress

  if ($('.scroll-top').length > 0) {
    var $scrollTopBtn = $('.scroll-top');
    var $progressPath = $('.scroll-top path');
    var pathLength = $progressPath[0].getTotalLength();

    $progressPath.css({
      transition: 'none',
      strokeDasharray: pathLength + ' ' + pathLength,
      strokeDashoffset: pathLength,
    });

    $progressPath[0].getBoundingClientRect();
    $progressPath.css({
      transition: 'stroke-dashoffset 10ms linear'
    });

    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      $progressPath.css('strokeDashoffset', progress);
    };

    updateProgress();

    $(window).on('scroll', updateProgress);

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 50) {
        $scrollTopBtn.addClass('show');
      } else {
        $scrollTopBtn.removeClass('show');
      }
    });

    $scrollTopBtn.on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  }

  // slider
  $('.testimonial-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 2,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,

        }
      }
    ]
  });

  $('.price-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,

        }
      }
    ]
  });



  $('.portfolio--slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,

        }
      }
    ]
  });





  // wow init
  new WOW().init();




  Splitting();


  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $('.popup_video').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allow="autoplay" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: function (url) {
            var match = url.match(/[?&]v=([^&]+)/);
            return match && match[1] ? match[1] : null;
          },
          src: 'https://www.youtube.com/embed/%id%?autoplay=1&mute=1&rel=0&showinfo=0' // ✅ muted autoplay
        }
      }
    }
  });





  // card VanillaTilt animation
  window.onload = function () {
    VanillaTilt.init(document.querySelectorAll(".staff--card"), {
      max: 10,
      speed: 4,
    });
  };


  // service page
  $(window).on('load', function () {
    // Only run on the service page where .all-service exists
    if ($('.all-service').length > 0) {
      gsap.registerPlugin(ScrollTrigger);





      // Hide all thumbnails except the first one
      $('.service--thumb').hide();
      $('#serviceThumb1').show();

      const sections = [
        { id: '#contentId1', thumb: '#serviceThumb1', bg: '#fff' },
        { id: '#contentId2', thumb: '#serviceThumb2', bg: '#ffe894' },
        { id: '#contentId3', thumb: '#serviceThumb3', bg: '#000' }
      ];

      sections.forEach((section, index) => {
        if ($(section.id).length > 0) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section.id,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
              onEnter: () => activateSection(index),
              onEnterBack: () => activateSection(index),
            }
          });

          tl.from(section.id, {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
      });

      function activateSection(index) {
        const { bg, thumb } = sections[index];

        // Animate background
        gsap.to('.all-service', {
          backgroundColor: bg,
          duration: 0.5
        });

        // Text color change
        const textColor = (bg.toLowerCase() === '#000') ? '#fff' : '#000';
        gsap.to('.content-details--wrap h6, .content-details--wrap p, .content-details--wrap ul, .content-details--wrap li', {
          color: textColor,
          duration: 0.5
        });



        // ✅ Show the corresponding image
        $('.service--thumb').hide(); // hide all
        $(thumb).show();            // show the current
      }



      gsap.registerPlugin(ScrollTrigger);

      const items = gsap.utils.toArray('.timeline-item');

      items.forEach((item) => {
        const icon = item.querySelector('.icon');

        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
          onEnter: () => icon.classList.add('active'),
          onLeaveBack: () => icon.classList.remove('active'),
        });
      });



      const progressBar = document.querySelector('.progress--bar');
      const timelineSection = document.querySelector('.timeline-section');
      gsap.to(progressBar, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timelineSection,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true
        }
      });

    }
  });



  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".text-reveal",
      {
        clipPath: "inset(0 100% 0 0)", // fully hidden initially
        filter: "blur(8px)",           // start blurred
        opacity: 0
      },
      {
        clipPath: "inset(0 0% 0 0)",   // reveal from left to right
        filter: "blur(0px)",           // become sharp
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5
      }
    );
  });




})(jQuery);


// matter js
(function () {
  const WALL_THICKNESS = 80;
  const MATTER_CONTAINER = document.querySelector("#matterContainer");
  const MATTER_HELPER = document.querySelector("#helper");

  let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

  let engine = Engine.create();
  let render = Render.create({
    element: MATTER_HELPER,
    engine: engine,
    background: "#020617",
    options: {
      width: MATTER_CONTAINER.offsetWidth,
      height: MATTER_CONTAINER.offsetHeight
    }
  });

  let domBodies = document.querySelectorAll(".tag__item");
  let matterBodies = {};
  let runner;
  let leftWall, rightWall, ground;

  init();

  function init() {
    createBounds();
    Composite.add(engine.world, [leftWall, rightWall, ground]);
    Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);
    creatMatterBodies();
    World.add(engine.world, Object.values(matterBodies));
    window.requestAnimationFrame(updateElementPositions);
    window.addEventListener("resize", handleResize);

    // Add mouse click throw functionality
    let mouse = Mouse.create(render.canvas);
    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: { visible: false }
      }
    });

    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;
    Matter.Events.on(mouseConstraint, 'mousedown', (event) => handleMouseClick(event.mouse.position));
  }

  function createBounds() {
    ground = Bodies.rectangle(
      MATTER_CONTAINER.offsetWidth / 2,
      MATTER_CONTAINER.offsetHeight + WALL_THICKNESS / 2,
      6000,
      WALL_THICKNESS,
      { isStatic: true }
    );

    leftWall = Bodies.rectangle(
      0 - WALL_THICKNESS / 2,
      MATTER_CONTAINER.offsetHeight / 2,
      WALL_THICKNESS,
      MATTER_CONTAINER.offsetHeight * 5,
      { isStatic: true }
    );

    rightWall = Bodies.rectangle(
      MATTER_CONTAINER.offsetWidth + WALL_THICKNESS / 2,
      MATTER_CONTAINER.offsetHeight / 2,
      WALL_THICKNESS,
      MATTER_CONTAINER.offsetHeight * 5,
      { isStatic: true }
    );
  }

  function creatMatterBodies() {
    domBodies.forEach(function (domBody) {
      let matterBody = Bodies.rectangle(
        MATTER_CONTAINER.offsetWidth / 2,
        -MATTER_CONTAINER.offsetHeight,
        domBody.offsetWidth,
        domBody.offsetHeight,
        {
          chamfer: { radius: domBody.offsetHeight / 2 },
          restitution: 0.925,
          density: Math.random() * 15,
          angle: Math.random() * 10,
          friction: Math.random() * 50,
          frictionAir: Math.random() / 150
        }
      );
      domBody.id = matterBody.id;
      matterBodies[matterBody.id] = matterBody;
    });
  }

  function updateElementPositions() {
    domBodies.forEach((domBody) => {
      let matterBody = matterBodies[domBody.id];
      if (matterBody) {
        domBody.style.transform =
          `translate(${matterBody.position.x - domBody.offsetWidth / 2}px, ${matterBody.position.y - domBody.offsetHeight / 2}px) ` +
          `rotate(${matterBody.angle}rad)`;
      }
    });

    window.requestAnimationFrame(updateElementPositions);
  }

  function handleResize() {
    render.canvas.width = MATTER_CONTAINER.offsetWidth;
    render.canvas.height = MATTER_CONTAINER.offsetHeight;
    Matter.Render.setPixelRatio(render, window.devicePixelRatio);

    Matter.Body.setPosition(
      ground,
      Matter.Vector.create(
        MATTER_CONTAINER.offsetWidth / 2,
        MATTER_CONTAINER.offsetHeight + WALL_THICKNESS / 2
      )
    );

    Matter.Body.setPosition(
      leftWall,
      Matter.Vector.create(
        0 - WALL_THICKNESS / 2,
        MATTER_CONTAINER.offsetHeight / 2
      )
    );

    Matter.Body.setPosition(
      rightWall,
      Matter.Vector.create(
        MATTER_CONTAINER.offsetWidth + WALL_THICKNESS / 2,
        MATTER_CONTAINER.offsetHeight / 2
      )
    );
  }

  function handleMouseClick(mousePosition) {
    let closestBody = null;
    let closestDistance = Infinity;

    Object.values(matterBodies).forEach((body) => {
      let distance = Matter.Vector.magnitude(
        Matter.Vector.sub(body.position, mousePosition)
      );

      if (distance < closestDistance) {
        closestBody = body;
        closestDistance = distance;
      }
    });

    if (closestBody) {
      let forceMagnitude = 0.05;
      let direction = Matter.Vector.normalise(
        Matter.Vector.sub(mousePosition, closestBody.position)
      );
      Matter.Body.applyForce(closestBody, closestBody.position, {
        x: direction.x * forceMagnitude,
        y: direction.y * forceMagnitude
      });
    }
  }
})();
