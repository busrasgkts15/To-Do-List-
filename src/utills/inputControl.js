export const isEnglishLettersOnly = (input) => {
  const regex = /^[A-Za-z]+$/i;
  return regex.test(input);
};

export const containsOnlyNumbers = (e) => {
  const regex = /^[0-9]$/; // Tek bir rakamı kontrol eder
  const key = e.key; // Basılan tuşu al

  console.log("Basılan tuş:", key);

  // Eğer basılan tuş rakam değilse ve özel izin verilen tuşlar değilse engelle
  if (
    !regex.test(key) &&
    key !== "Backspace" &&
    key !== "Delete" &&
    key !== "ArrowLeft" &&
    key !== "ArrowRight" &&
    key !== "Tab"
  ) {
    e.preventDefault();
    console.log("Geçersiz giriş: Sadece rakamlar girilebilir.");
  }
};
