const getInvertedText = (prueba) => {
  if (!prueba) return ""
  return prueba.split("").reverse().join("")
}

module.exports = {
  getInvertedText
}