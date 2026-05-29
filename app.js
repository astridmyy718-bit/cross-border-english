const lessons = [
  {
    topic: "Customs Clearance",
    title: "Shipment held by customs",
    reading:
      "A shipment can be held by customs when the invoice value, HS code, consignee details, or product description is incomplete. In a professional update, explain the reason clearly, confirm what document is required, and give the customer a realistic timeline. Avoid blaming customs directly. Instead, use neutral language such as: The shipment is pending customs review, and we are coordinating with the broker to provide the missing information.",
    phrases: [
      "The shipment is pending customs review.",
      "Could you provide a revised commercial invoice?",
      "We are coordinating with the customs broker.",
      "The clearance timeline may be extended by one to two business days.",
    ],
    dialogue:
      "Customer: Why is my shipment delayed? Agent: The shipment is currently pending customs review because the product description on the invoice is not specific enough. We are working with the broker and will update you once customs confirms release.",
    writing:
      "客户询问为什么包裹卡在海关。请写一封简短英文邮件，说明原因、需要的文件、预计处理时间，并保持专业语气。",
    template: [
      "Thank the customer for checking in.",
      "State the current status with neutral wording.",
      "Request the missing document or confirm your next action.",
      "Give a realistic timeline and promise the next update.",
    ],
    speaking:
      "You are speaking to a buyer whose parcel is held by customs. Explain the issue in 60 seconds and ask for the missing invoice information.",
    frames: [
      "At the moment, the shipment is...",
      "To move this forward, we need...",
      "Once we receive it, we will...",
    ],
  },
  {
    topic: "Duties & Taxes",
    title: "Explaining import duties",
    reading:
      "Import duties and taxes are usually charged by the destination country and may depend on the declared value, product category, HS code, and local tax rules. When discussing charges with a customer, separate shipping fees from government charges. A clear explanation reduces disputes: The shipping fee covers transportation, while duties and taxes are collected by local authorities upon import.",
    phrases: [
      "Duties and taxes are assessed by the destination country.",
      "The shipping fee does not include import charges.",
      "The final amount depends on local customs regulations.",
      "Please contact the carrier or customs office for the payment link.",
    ],
    dialogue:
      "Buyer: I already paid for shipping. Why do I need to pay again? Seller: The shipping fee covers transportation only. Import duties and taxes are charged by local customs based on the declared value and product category.",
    writing:
      "客户抱怨已经付了运费却还要付税金。请用英文解释运费和进口税费的区别，并给出下一步建议。",
    template: [
      "Acknowledge the concern.",
      "Clarify the difference between shipping fees and import charges.",
      "Mention who assesses the tax.",
      "Offer the practical next step.",
    ],
    speaking:
      "Explain to a customer why import duties are not the same as shipping fees. Keep the tone calm and helpful.",
    frames: [
      "I understand the confusion.",
      "Shipping covers..., while duties cover...",
      "The amount is determined by...",
    ],
  },
  {
    topic: "Delivery Exception",
    title: "Address issue in last-mile delivery",
    reading:
      "A delivery exception often means the carrier cannot complete delivery because of an address issue, unavailable recipient, restricted access, or failed contact attempt. The best response is specific and action-oriented. Confirm the address format, phone number, postal code, and preferred delivery window. If needed, ask the customer to contact the local carrier directly.",
    phrases: [
      "The carrier reported a delivery exception.",
      "Please confirm the full delivery address and phone number.",
      "A redelivery attempt can be arranged after the address is verified.",
      "The package may be returned if the carrier cannot reach the recipient.",
    ],
    dialogue:
      "Agent: The carrier reported an address exception. Could you confirm the apartment number and local phone number? Buyer: Yes, the apartment number was missing. Agent: Thank you. We will request a redelivery attempt.",
    writing:
      "物流轨迹显示地址异常。请写一条英文消息，让客户确认地址、电话和是否需要重新派送。",
    template: [
      "State the tracking exception.",
      "Ask for the exact information needed.",
      "Explain what you will do after confirmation.",
      "Mention any deadline if the carrier may return the parcel.",
    ],
    speaking:
      "Call a customer to confirm an incomplete address and explain how redelivery works.",
    frames: [
      "The carrier was unable to complete delivery because...",
      "Could you confirm...",
      "After we verify the details, we can...",
    ],
  },
  {
    topic: "HS Code",
    title: "Classifying products for declaration",
    reading:
      "The HS code is used to classify products for customs declaration. A vague product name can lead to customs questions, incorrect duty rates, or delayed clearance. For ecommerce shipments, product descriptions should include material, function, and usage. For example, wireless plastic phone charger is more useful than accessory.",
    phrases: [
      "The HS code should match the product material and function.",
      "Customs may request a more detailed product description.",
      "Please avoid generic terms such as sample or accessory.",
      "A more accurate declaration can reduce clearance delays.",
    ],
    dialogue:
      "Broker: The description says accessory. What exactly is the item? Seller: It is a plastic wireless phone charger. Broker: Great. We can update the declaration with a more specific description.",
    writing:
      "供应商给你的品名太笼统。请写英文消息要求对方补充材质、用途、品牌/型号和建议 HS code。",
    template: [
      "Explain why the current description is not enough.",
      "List the details required.",
      "Ask them to confirm the suggested HS code.",
      "Set a clear response deadline.",
    ],
    speaking:
      "Ask a supplier for a more accurate product description for customs declaration.",
    frames: [
      "For customs purposes, we need...",
      "Could you specify the material and function?",
      "This will help us avoid...",
    ],
  },
  {
    topic: "Incoterms",
    title: "DDP vs DAP",
    reading:
      "DDP and DAP create very different customer expectations. Under DDP, the seller usually handles transportation, customs clearance, duties, and taxes to the named destination. Under DAP, the seller arranges delivery, but the buyer is responsible for import duties and taxes. In ecommerce communication, always confirm the incoterm before promising a landed cost.",
    phrases: [
      "Under DDP, duties and taxes are prepaid by the seller.",
      "Under DAP, the buyer is responsible for import charges.",
      "Please confirm the agreed incoterm before shipment.",
      "The landed cost may change if the incoterm changes.",
    ],
    dialogue:
      "Manager: Is this order DDP or DAP? Coordinator: It is DAP, so the buyer may receive a tax payment notice from local customs. Manager: Please make sure the customer is informed before dispatch.",
    writing:
      "客户要求包税到门。请用英文说明 DDP 服务包含哪些费用，并提醒如果改成 DAP，税费由买家承担。",
    template: [
      "Confirm the requested service.",
      "Define what DDP includes.",
      "Contrast it with DAP.",
      "Ask for confirmation before shipment.",
    ],
    speaking:
      "Explain the difference between DDP and DAP to a sales colleague preparing a quote.",
    frames: [
      "The key difference is...",
      "With DDP, we handle...",
      "With DAP, the buyer will...",
    ],
  },
  {
    topic: "Freight Quote",
    title: "Asking for an accurate shipping quote",
    reading:
      "A freight quote depends on chargeable weight, dimensions, pickup and delivery address, service level, cargo type, and customs requirements. When requesting a quote, provide complete data upfront. This makes the rate more reliable and helps avoid later adjustments for remote area fees, oversized cargo, fuel surcharge, or residential delivery fees.",
    phrases: [
      "Could you quote based on the chargeable weight?",
      "Please include fuel surcharge and remote area fees if applicable.",
      "The cargo is ready for pickup on Friday.",
      "We need both economy and express options.",
    ],
    dialogue:
      "Seller: Could you quote an express service from Shenzhen to Berlin? Forwarder: Please provide dimensions, gross weight, product type, and pickup address. Seller: I will send the packing list now.",
    writing:
      "请写英文询价邮件给货代，提供起运地、目的地、重量尺寸、货物类型，并要求经济和快速两个方案。",
    template: [
      "Introduce the shipment lane.",
      "Provide cargo and package details.",
      "Ask for service options and total charges.",
      "Request validity and transit time.",
    ],
    speaking:
      "Call a freight forwarder to request a quote for an ecommerce shipment.",
    frames: [
      "We are looking for a quote from... to...",
      "The cargo details are...",
      "Could you include...",
    ],
  },
  {
    topic: "Claims",
    title: "Lost or damaged shipment",
    reading:
      "A claim needs evidence. For a damaged shipment, collect photos of the outer carton, inner packaging, product damage, shipping label, and invoice. For a lost shipment, confirm the last tracking scan and ask the carrier to open an investigation. Keep the customer informed without promising compensation before the claim result is confirmed.",
    phrases: [
      "We have opened an investigation with the carrier.",
      "Please provide photos of the damaged item and packaging.",
      "The claim result is subject to the carrier's review.",
      "We will update you once the carrier confirms the outcome.",
    ],
    dialogue:
      "Buyer: My item arrived damaged. Agent: I am sorry to hear that. Could you send photos of the product, outer carton, inner packaging, and shipping label? We will submit a claim to the carrier.",
    writing:
      "客户反馈破损。请写英文回复，表达歉意、要求照片证据、说明会向承运商提交索赔。",
    template: [
      "Apologize and show ownership.",
      "List the evidence needed.",
      "Explain the claim process.",
      "Set expectations for follow-up.",
    ],
    speaking:
      "Handle a call from a buyer reporting a damaged parcel and guide them through the claim evidence.",
    frames: [
      "I am sorry the item arrived damaged.",
      "To file the claim, we will need...",
      "After we receive the photos, we can...",
    ],
  },
  {
    topic: "Warehouse",
    title: "Inventory receiving delay",
    reading:
      "Warehouse receiving can be delayed if cartons arrive without labels, SKU information does not match the ASN, or the warehouse is processing a peak-season backlog. A good business update should name the bottleneck, separate received quantity from available quantity, and give the next checkpoint for inventory availability.",
    phrases: [
      "The cartons have arrived but are not yet checked in.",
      "The received quantity does not match the ASN.",
      "Inventory will become available after put-away is completed.",
      "We expect the stock to be sellable by tomorrow afternoon.",
    ],
    dialogue:
      "Sales: Why is the product still unavailable? Operations: The cartons arrived, but the SKU labels do not match the ASN. The warehouse is verifying the items before put-away.",
    writing:
      "销售同事询问为什么库存还没上架。请用英文解释收货延迟、当前状态和预计可售时间。",
    template: [
      "Confirm the goods arrived.",
      "Explain why they are not sellable yet.",
      "State the action being taken.",
      "Give the next update time.",
    ],
    speaking:
      "Explain to a sales teammate why received inventory is not available for sale yet.",
    frames: [
      "The goods have arrived at the warehouse, but...",
      "The team is currently...",
      "We expect availability by...",
    ],
  },
  {
    publishedAt: "2026-05-29 19:00",
    topic: "Costa Rica Customs Compliance",
    title: "Customs invoice value and CIF calculation",
    reading:
      "For customs purposes, the invoice value should correspond only to the value of the items contained in the shipment. It should not include VAT or the calculation of duties, because this may result in a higher tax payment than required. The invoice presented to the final customer can be different from the invoice used for customs clearance. In Costa Rica, CIF value generally consists of product cost, insurance, and freight. If the freight rate has already been calculated based on transportation from origin to destination plus handling, it can be explained as part of the customs calculation methodology.",
    phrases: [
      "For customs purposes, the invoice value should reflect only the value of the shipped items.",
      "VAT and duties should not be included in the customs invoice value.",
      "The final-customer invoice is separate from the invoice used for customs clearance.",
      "The CIF value consists of product cost, insurance, and freight.",
      "This calculation methodology is operationally viable under the current process.",
    ],
    dialogue:
      "Astrid: Can we separate the item value from VAT and duties on the customs invoice? Broker: Yes. According to the current legislation, the customs invoice should reflect only the value of the items in the shipment. VAT and duties should not be included, otherwise taxes may be overpaid. Astrid: What if Customs compares the value with the local market? Broker: Such comparison is not binding. The declared values from the website or APP should prevail, and Customs may request banking proof only if they have doubts.",
    writing:
      "请写一封英文邮件给内部同事，解释为什么 customs invoice value 只应包含商品价值，不应包含 VAT/duties，并说明 CIF、两套 invoice、以及 Customs 可能要求交易证明的情况。",
    template: [
      "Open with the purpose of the clarification.",
      "Explain the customs invoice value rule.",
      "Clarify the difference between the final-customer invoice and the customs invoice.",
      "Define CIF and the freight calculation basis.",
      "Close with a cautious compliance conclusion.",
    ],
    speaking:
      "Explain to a broker or internal stakeholder why separating product value, VAT, duties, and freight is legal, practical, and aligned with customs calculation methodology.",
    frames: [
      "According to the current legislation...",
      "For customs purposes, we should declare...",
      "This does not represent a violation of the law because...",
      "If Customs has any doubts, they may request...",
    ],
  },
];

let currentIndex = getLatestIndex();
let timerId = null;
let secondsLeft = 60;

const $ = (selector) => document.querySelector(selector);

function getDailyIndex() {
  const start = new Date("2026-01-01T00:00:00");
  const today = new Date();
  const diff = Math.floor((today - start) / 86400000);
  return ((diff % lessons.length) + lessons.length) % lessons.length;
}

function getLatestIndex() {
  return lessons.length - 1;
}

function getPublishedLabel(lesson) {
  return lesson.publishedAt || "Starter archive";
}

function lessonKey() {
  const lesson = lessons[currentIndex];
  const id = getPublishedLabel(lesson).replace(/\W+/g, "-").toLowerCase();
  return `cb-logistics-english-${id}-${currentIndex}`;
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    alert("当前浏览器不支持语音播放。可以换 Chrome、Edge 或 Safari 试试。");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function renderLesson() {
  const lesson = lessons[currentIndex];
  const today = new Date();
  $("#todayLabel").textContent = today.toLocaleDateString("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short",
  });
  $("#lessonDay").textContent = `Lesson ${currentIndex + 1}`;
  $("#lessonTopic").textContent = lesson.topic;
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonPublished").textContent = `更新时间：${getPublishedLabel(lesson)}`;
  $("#readingText").textContent = lesson.reading;
  $("#dialogueText").textContent = lesson.dialogue;
  $("#writingPrompt").textContent = lesson.writing;
  $("#speakingPrompt").textContent = lesson.speaking;

  $("#phraseList").innerHTML = lesson.phrases.map((item) => `<li>${item}</li>`).join("");
  $("#writingTemplate").innerHTML = lesson.template.map((item) => `<li>${item}</li>`).join("");
  $("#speakingFrames").innerHTML = lesson.frames.map((item) => `<li>${item}</li>`).join("");

  $("#listeningAnswer").value = localStorage.getItem(`${lessonKey()}-listening`) || "";
  $("#writingDraft").value = localStorage.getItem(`${lessonKey()}-writing`) || "";
}

function renderArchive() {
  $("#archiveList").innerHTML = lessons
    .map(
      (lesson, index) => `
        <article class="archive-card">
          <div>
            <p class="tag">${lesson.topic}</p>
            <h3>${lesson.title}</h3>
            <p class="lesson-meta">${getPublishedLabel(lesson)}</p>
            <p class="muted">${lesson.writing}</p>
          </div>
          <button class="small-btn" data-lesson="${index}">复习这课</button>
        </article>
      `,
    )
    .reverse()
    .join("");
}

function renderLibrary() {
  $("#libraryGrid").innerHTML = lessons
    .map(
      (lesson, index) => `
        <article class="library-card">
          <p class="tag">${lesson.topic}</p>
          <h3>${lesson.title}</h3>
          <p class="muted">${lesson.writing}</p>
          <button class="small-btn" data-lesson="${index}">打开课程</button>
        </article>
      `,
    )
    .join("");
}

function renderProgress() {
  const done = JSON.parse(localStorage.getItem("cb-logistics-english-done") || "[]");
  $("#doneCount").textContent = done.length;
  $("#doneDates").textContent = done.length ? done.join("、") : "还没有记录，今天可以开张。";
  $("#studyNotes").value = localStorage.getItem("cb-logistics-english-notes") || "";
}

function setView(viewId) {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });
}

function updateTimer() {
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");
  $("#timerValue").textContent = `${minutes}:${seconds}`;
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

$("#prevLesson").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + lessons.length) % lessons.length;
  renderLesson();
});

$("#nextLesson").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % lessons.length;
  renderLesson();
});

$("#readArticle").addEventListener("click", () => speak(lessons[currentIndex].reading));
$("#readPhrases").addEventListener("click", () => speak(lessons[currentIndex].phrases.join(". ")));
$("#playDialogue").addEventListener("click", () => speak(lessons[currentIndex].dialogue));
$("#speakPrompt").addEventListener("click", () => speak(lessons[currentIndex].speaking));

$("#listeningAnswer").addEventListener("input", (event) => {
  localStorage.setItem(`${lessonKey()}-listening`, event.target.value);
});

$("#saveWriting").addEventListener("click", () => {
  localStorage.setItem(`${lessonKey()}-writing`, $("#writingDraft").value);
  alert("已保存今天的写作练习。");
});

$("#startTimer").addEventListener("click", () => {
  clearInterval(timerId);
  secondsLeft = 60;
  updateTimer();
  timerId = setInterval(() => {
    secondsLeft -= 1;
    updateTimer();
    if (secondsLeft <= 0) {
      clearInterval(timerId);
      speak("Time is up. Please summarize your answer in one final sentence.");
    }
  }, 1000);
});

$("#markDone").addEventListener("click", () => {
  const today = new Date().toISOString().slice(0, 10);
  const done = JSON.parse(localStorage.getItem("cb-logistics-english-done") || "[]");
  if (!done.includes(today)) {
    done.push(today);
    localStorage.setItem("cb-logistics-english-done", JSON.stringify(done));
  }
  renderProgress();
});

$("#saveNotes").addEventListener("click", () => {
  localStorage.setItem("cb-logistics-english-notes", $("#studyNotes").value);
  alert("笔记已保存。");
});

$("#libraryGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson]");
  if (!button) return;
  currentIndex = Number(button.dataset.lesson);
  renderLesson();
  setView("daily");
});

$("#archiveList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson]");
  if (!button) return;
  currentIndex = Number(button.dataset.lesson);
  renderLesson();
  setView("daily");
});

renderLesson();
renderArchive();
renderLibrary();
renderProgress();
