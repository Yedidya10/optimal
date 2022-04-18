export class Dialog {
  constructor()

  openPopup = () => {
  addEventListener("click", () => {
    modal.showModal();
  });

  closePopup = () => {
  addEventListener("click", () => {
    modal.close();
  });
}