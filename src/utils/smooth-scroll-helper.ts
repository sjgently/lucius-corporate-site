export const handleSmoothScroll = ({
  id,
  buffer
}: {
  id: string
  buffer: number
}) => {
  const targetElement = document.getElementById(id)
  if (targetElement === null) {
    return
  }

  const rectTop = targetElement.getBoundingClientRect().top
  const offsetTop = window.scrollY
  const top = rectTop + offsetTop - buffer

  window.scrollTo({
    top,
    behavior: 'smooth'
  })
}
