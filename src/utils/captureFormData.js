export function captureFormData(event) {
  const elementsArray = [...event.target.elements];
  const formData = elementsArray.reduce((acc, elem) => {
    if (elem.id) {
      if (elem.type === "checkbox") {
        acc[elem.id] = elem.checked;
      } else {
        acc[elem.id] = elem.value;
      }
    }

    return acc;
  }, {});

  return formData;
}
