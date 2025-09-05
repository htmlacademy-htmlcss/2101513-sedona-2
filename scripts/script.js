const ModalSettings = {
  MODAL_CLASS: 'modal',
  MODAL_HIDDEN_CLASS: 'modal--inactive',
  BODY_MODAL_OPEN_CLASS: 'modal-is-open',
  OPEN_BUTTON_CLASS: 'offer__button',
  CLOSE_BUTTON_CLASS: 'modal__close'
}

const modalElement = document.querySelector(`.${ModalSettings.MODAL_CLASS}`);

const toggleModalVisibilityHandler = ({ target }) => {
  const isOpenTriggerElement = target.classList.contains(ModalSettings.OPEN_BUTTON_CLASS);
  const isCloseTriggerElement = target.classList.contains(ModalSettings.CLOSE_BUTTON_CLASS);

  if (isOpenTriggerElement || isCloseTriggerElement) {
    modalElement.classList.toggle(ModalSettings.MODAL_HIDDEN_CLASS);
    document.body.classList.toggle(ModalSettings.BODY_MODAL_OPEN_CLASS);
  }
};

if (modalElement) {
  document.addEventListener('click', toggleModalVisibilityHandler);
}
