document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // ══════════════════════════════════════════
  // Modal Data — 用普通字符串避免模板字符串兼容问题
  // ══════════════════════════════════════════

  var modalData = {
    "orig-1": {
      meta: "人群分析 / 公众号专栏 / 2025",
      title: "她辞掉稳定工作以后，重新学会如何安排一天",
      content: '<p>这是一篇关于\u201c自由\u201d与\u201c时间秩序\u201d的人物稿。</p>' +
        '<p>三十岁那年，小陈辞掉了在一家互联网公司干了五年的运营工作。不是因为被裁，也不是因为考上了什么更好的去处。她只是觉得\u2014\u2014每天早上醒来，第一个念头不应该是\u201c今天又要开几个会\u201d。</p>' +
        '<p>辞职后的第一个月，她过得像放了一个漫长的假。但从第二个月开始，一种从未有过的焦虑慢慢浮上来：没有人给她排日程了。</p>' +
        '<p>\u201c以前我觉得自由就是不用被管，后来才发现，自由其实是你要自己管自己。\u201d她在采访中说。</p>' +
        '<p>她开始记录自己每天做了什么、花了多长时间。她发现，没有外部约束后，最难的不是自律，而是\u201c定义什么是重要的事\u201d。以前工作帮她做了这个决定\u2014\u2014KPI就是重要的事。现在没人告诉她了。</p>' +
        '<p>这篇稿件试图写的不是\u201c裸辞的勇气\u201d，而是一个人离开结构之后，如何重建属于自己的时间秩序。这个过程里有兴奋、有失落、有重新定义自我价值的漫长摸索。</p>' +
        '<p>我关注的不是那个\u201c辞职的决定\u201d，而是辞职之后那些不被讲述的日常\u2014\u2014买菜、午睡、下午三点的发呆、深夜突然涌上来的不安。这些才是真实的\u201c自由\u201d的样子。</p>'
    },
    "orig-2": {
      meta: "情感洞察 / 媒体投稿 / 2024",
      title: "当我们谈论松弛感时，究竟在谈什么",
      content: '<p>\u201c松弛感\u201d这个词在 2024 年几乎无处不在。小红书上有松弛感穿搭、松弛感妆容、松弛感旅行、松弛感恋爱。它从一个形容词变成了一种生活方式的标签。</p>' +
        '<p>但问题是\u2014\u2014真正松弛的人，不会把\u201c松弛\u201d挂在嘴边。</p>' +
        '<p>这篇文章从\u201c松弛感\u201d这个流行词出发，尝试拆解它背后的几层含义：对内卷的反抗、对\u201c努力叙事\u201d的疲倦、以及一种新的社交媒体表演形式。</p>' +
        '<p>当所有人都在表演松弛时，松弛本身就变成了另一种紧绑。你不仅要过得好，还要看起来\u201c不费力地过得好\u201d。这比单纯的炫耀更难\u2014\u2014因为它要求你隐藏所有的努力痕迹。</p>' +
        '<p>我采访了几位在社交媒体上以\u201c松弛感\u201d著称的博主。她们中的大多数人告诉我，她们拍一张\u201c随意的\u201d照片，通常需要选场地、调光线、换三套衣服。</p>' +
        '<p>松弛感的悖论在于：它本质上是对压力的回应，但它的传播方式本身就制造了新的压力。当一种情绪变成了可消费的内容，它就很难再是真实的情绪了。</p>'
    },
    "orig-3": {
      meta: "商业观察 / 独立写作 / 2025",
      title: "为什么\u201c精致生活\u201d内容总让人同时向往又疲惫",
      content: '<p>打开任何一个内容平台，你都能看到大量关于\u201c精致生活\u201d的内容：精心布置的家居角落、摆盘完美的早餐、质感满分的穿搭。</p>' +
        '<p>这些内容让人向往\u2014\u2014谁不想过那样的生活呢？但同时，它们也让人疲惫。因为你看到的\u201c日常\u201d，其实是别人精心编排的\u201c作品\u201d。而你的日常，就是真实的、凌乱的、毫无美感的日常。</p>' +
        '<p>这篇文章讨论的是平台审美如何影响了我们对\u201c正常生活\u201d的定义。当所有人都在展示最好的一面时，\u201c普通\u201d就变成了\u201c不够好\u201d。</p>' +
        '<p>我梳理了几类典型的\u201c精致生活\u201d内容模板，分析了它们的叙事结构、视觉策略和情绪钩子。我发现这些内容有一个共同的隐含信息\u2014\u2014\u201c你可以通过消费来获得这种生活\u201d。</p>' +
        '<p>但生活不是一个可以被购买的产品。当我们把生活方式当作内容来消费时，我们实际上是在消费一种幻觉\u2014\u2014一种\u201c只要我也买了同款，我就能过上那种生活\u201d的幻觉。</p>'
    },
    "brand-1": {
      meta: "新消费品牌 / 内容策划",
      title: "某生活方式品牌 \u00d7 公众号系列内容策划",
      content: '<p><strong>项目背景：</strong>某新消费生活方式品牌希望通过公众号建立品牌内容阵地，但此前缺乏系统性的内容规划。品牌方希望通过内容传递\u201c不焦虑的生活态度\u201d。</p>' +
        '<p><strong>我的角色：</strong>项目全流程负责人\u2014\u2014从前期品牌沟通、选题规划到撰稿执行、审核交付。</p>' +
        '<p><strong>执行过程：</strong></p>' +
        '<p>第一阶段：与品牌方深度沟通，梳理品牌核心价值、目标用户画像和内容调性。确定了\u201c真实生活场景 + 产品自然融入\u201d的内容策略。</p>' +
        '<p>第二阶段：策划 6 篇系列图文，覆盖三个维度\u2014\u2014产品使用场景故事、真实用户采访、品牌理念表达。每篇稿件都从用户的真实生活出发，而非产品功能介绍。</p>' +
        '<p>第三阶段：独立完成全部稿件撰写，与品牌方进行三轮修改确认后交付。</p>' +
        '<p><strong>项目成果：</strong>系列内容上线后，品牌公众号的平均阅读量提升了约 40%，用户留言互动中出现了大量与\u201c生活态度\u201d相关的讨论，达到了品牌方\u201c用内容建立情感连接\u201d的目标。</p>'
    },
    "brand-2": {
      meta: "互联网平台 / 专题策划",
      title: "某社区平台年度内容专题策划与执行",
      content: '<p><strong>项目背景：</strong>某社区平台希望推出一个年度内容专题，聚焦\u201c年轻人的新生活方式\u201d，需要从选题策划到内容产出的全流程交付。</p>' +
        '<p><strong>我的角色：</strong>专题负责人\u2014\u2014统筹选题方向、作者资源调配、稿件编辑审核和上线排期。</p>' +
        '<p><strong>执行过程：</strong></p>' +
        '<p>首先进行了为期两周的选题调研，通过平台数据分析和用户调研，确定了 12 个子话题方向，覆盖职业、居住、消费、社交四个维度。</p>' +
        '<p>之后对接了 8 位外部作者，为每位作者制定了详细的选题 brief，包括写作方向、目标读者、内容调性和参考案例。</p>' +
        '<p>在稿件生产阶段，我负责每篇稿件的结构审核、语言编辑和事实核查，确保 12 篇内容在质量和风格上的一致性。</p>' +
        '<p><strong>项目成果：</strong>项目周期 3 个月，按时完成全部 12 篇深度内容的交付。专题上线后成为该平台当季的标杆内容项目。</p>'
    },
    "brand-3": {
      meta: "文化机构 / 品牌升级",
      title: "某文化空间品牌升级内容方案",
      content: '<p><strong>项目背景：</strong>一家位于城市核心区的独立文化空间希望进行品牌升级，从\u201c小众活动场地\u201d转向\u201c城市文化生活方式品牌\u201d。需要重新梳理品牌定位并产出首批传播内容。</p>' +
        '<p><strong>我的角色：</strong>品牌内容策略制定者 + 首批传播物料的策划与撰写者。</p>' +
        '<p><strong>执行过程：</strong></p>' +
        '<p>第一步：通过与创始团队的多轮访谈和现场调研，梳理了空间的核心价值\u2014\u2014\u201c在城市中创造慢下来的可能\u201d。</p>' +
        '<p>第二步：制定了品牌内容策略，确定了三个内容支柱\u2014\u2014空间故事、人物采访、活动记录，并为每个支柱设计了内容模板和视觉指引。</p>' +
        '<p>第三步：撰写了品牌故事长文、3 篇人物采访和 1 份活动回顾，作为品牌升级后的首批内容资产。</p>' +
        '<p><strong>项目成果：</strong>品牌升级方案获得创始团队的高度认可，首批内容在多个平台分发后获得了良好的用户反馈，为后续的持续内容运营奠定了基调。</p>'
    },
    "author-1": {
      meta: "人物特写 / 作者：张某 / 2025",
      title: "一个县城摄影师，如何记录消失中的老街",
      content: '<p>老赵今年五十三岁，在一个南方县城经营一家照相馆。二十年前，他开始用胶片相机记录县城老街的变化。那时候他只是觉得\u201c拍着好玩\u201d，没想到二十年后，那些老街大部分都不在了。</p>' +
        '<p>他的照片成了这个县城唯一一份连续的视觉档案。</p>' +
        '<p>\u201c我不是什么摄影师，\u201d他说，\u201c我就是开照相馆的。给人拍证件照、拍全家福。后来顺手拍了些街景。\u201d</p>' +
        '<p>他的\u201c顺手\u201d持续了二十年。每隔几个月，他就会沿着固定的路线走一遍老街，在同样的位置按下快门。时间在他的照片里变成了可以对比的东西\u2014\u2014这栋楼什么时候拆了、那棵树什么时候没了、路口的早餐店换了几任老板。</p>' +
        '<p>我花了三天时间和他一起走了那些路线。有些地方已经变成了新小区的围墙，有些变成了停车场。他指着围墙对我说：\u201c这里以前是一家裁缝店，门口有棵桂花树。\u201d他的手里没有相机\u2014\u2014因为\u201c已经没什么可拍的了\u201d。</p>' +
        '<p>这篇稿件通过口述、档案翻拍与现场观察完成。我试图写的不只是一个人的拍摄行为，而是记忆如何依附于空间，以及当空间消失后，记忆会去向哪里。</p>'
    },
    "author-2": {
      meta: "城市观察 / 作者：李某 / 2024",
      title: "夜晚的便利店，像城市为失眠者留下的一个注脚",
      content: '<p>凌晨两点的便利店，灯光比任何时候都亮。</p>' +
        '<p>这是一个你不需要理由就可以待着的地方。你不需要消费\u2014\u2014虽然你通常会买一瓶水或一个饭团。你不需要和任何人说话。你甚至不需要看起来\u201c正常\u201d。</p>' +
        '<p>作者李某在过去的半年里，用了大概 30 个深夜走访了城市里不同区域的便利店。她观察店员、观察顾客、观察那些在凌晨走进便利店的人。</p>' +
        '<p>有加完班的年轻人，西装皱巴巴的，站在关东煮前发呆；有看起来刚吵完架的情侣，各自在不同的货架前沉默；有拖着行李箱的人，不知道是刚下飞机还是刚离开一个住处。</p>' +
        '<p>便利店是城市里最不挑剔的空间\u2014\u2014它 24 小时开门，对所有人一视同仁。它不关心你为什么深夜还在外面，它只是亮着灯，等着你来。</p>' +
        '<p>这篇稿件在我担任编辑期间，与作者经过四轮修改最终定稿。我负责整体结构调整和节奏把控，确保散文式的观察不失去叙事的推进力。</p>'
    },
    "author-3": {
      meta: "文化评论 / 作者：王某 / 2025",
      title: "播客热潮之后，我们需要怎样的表达耐心",
      content: '<p>2023 年是中文播客的\u201c爆发年\u201d。大量新节目上线，平台纷纷加码音频赛道。但到了 2025 年，热潮退去后，一些更本质的问题浮出了水面。</p>' +
        '<p>作者王某在这篇文章里讨论了三个问题：</p>' +
        '<p>第一，播客作为一种\u201c慢媒介\u201d，它的价值是什么？在短视频统治注意力的时代，一个需要你花 60 分钟去听的内容，凭什么吸引人？</p>' +
        '<p>第二，当播客开始追求\u201c效率\u201d\u2014\u2014更短的时长、更刺激的标题、更密集的信息\u2014\u2014它是否还是播客？还是变成了另一种形式的短视频？</p>' +
        '<p>第三，听觉媒介的独特性在哪里？文字可以被快速浏览，视频可以被倍速播放，但声音有它自己的时间\u2014\u2014你不能真正\u201c跳过\u201d一段声音，只能等它说完。</p>' +
        '<p>这篇稿件的选题由我策划，作者王某完成初稿后，我进行了结构梳理和论证逻辑的优化。最终版本更清晰地呈现了\u201c表达耐心\u201d这个核心概念。</p>'
    }
  };

  // ══════════════════════════════════════════
  // Modal DOM
  // ══════════════════════════════════════════

  var overlay = document.getElementById("modalOverlay");
  var modalEl = document.getElementById("modal");
  var modalBody = document.getElementById("modalBody");
  var modalClose = document.getElementById("modalClose");

  if (!overlay || !modalBody || !modalClose) {
    console.warn("Modal elements not found");
    return;
  }

  function openModal(id) {
    var data = modalData[id];
    if (!data) return;

    modalBody.innerHTML =
      '<p class="modal-meta">' + data.meta + '</p>' +
      '<h2 class="modal-title">' + data.title + '</h2>' +
      '<div class="modal-content">' + data.content + '</div>';

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // 点击任何带 data-modal 的元素打开弹窗
  document.addEventListener("click", function (e) {
    var trigger = e.target.closest("[data-modal]");
    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      openModal(trigger.getAttribute("data-modal"));
    }
  });

  modalClose.addEventListener("click", function (e) {
    e.stopPropagation();
    closeModal();
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  // ══════════════════════════════════════════
  // Header scroll state
  // ══════════════════════════════════════════

  var header = document.querySelector(".header");
  var scrollTicking = false;

  window.addEventListener("scroll", function () {
    if (!scrollTicking) {
      requestAnimationFrame(function () {
        if (header) {
          if (window.scrollY > 60) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // ══════════════════════════════════════════
  // Mobile nav toggle
  // ══════════════════════════════════════════

  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    var navLinks = nav.querySelectorAll("a");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function () {
        nav.classList.remove("open");
      });
    }
  }

  // ══════════════════════════════════════════
  // Scroll Reveal
  // ══════════════════════════════════════════

  var revealSelectors = [
    ".hero-content", ".hero-aside", ".role-badge", ".sec-label", ".subsec-title",
    ".overview-grid", ".works-trio", ".series-showcase", ".brand-method", ".client-types",
    ".case-grid", ".role-analysis", ".life-desc", ".life-gallery",
    ".about-body", ".contact-inner"
  ];

  var revealEls = document.querySelectorAll(revealSelectors.join(", "));
  for (var i = 0; i < revealEls.length; i++) {
    revealEls[i].classList.add("reveal");
  }

  // stagger children
  var staggerParents = document.querySelectorAll(
    ".works-trio, .case-grid, .role-analysis, .series-showcase, .life-gallery, .category-cards, .contact-links"
  );
  for (var p = 0; p < staggerParents.length; p++) {
    var children = staggerParents[p].children;
    for (var c = 0; c < children.length; c++) {
      children[c].classList.add("reveal");
      children[c].classList.add("reveal-d" + Math.min(c + 1, 3));
    }
  }

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add("is-visible");
          revealObserver.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    var allReveal = document.querySelectorAll(".reveal");
    for (var i = 0; i < allReveal.length; i++) {
      revealObserver.observe(allReveal[i]);
    }
  } else {
    // fallback: show everything immediately
    var allReveal = document.querySelectorAll(".reveal");
    for (var i = 0; i < allReveal.length; i++) {
      allReveal[i].classList.add("is-visible");
    }
  }
});
