window.addEventListener("load", function () {
  // 햄버거메뉴 기능
  const hamburger = this.document.querySelector("#hamburger");
  const mobileMenu = this.document.querySelector("#mobileMenu");
  const overlay = this.document.querySelector("#overlay");
  //   모바일 햄버거바 클릭시 이벤트
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    hamburger.classList.add("active");
    // ****************액티브생겼을 때 스크롤 없애는 법**********(상황연산자사용)
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  });
  //  햄버거바 닫을 때
  overlay.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.style.overflow = "";
  });
});
