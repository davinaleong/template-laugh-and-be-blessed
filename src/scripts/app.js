const dataElementAttr = `data-element`

const dialogCatalogEl = document.querySelector(
  `[${dataElementAttr}="dialog-catalog"]`
)
const aCardEls = document.querySelectorAll(`a.card`)

if (aCardEls && aCardEls.length > 0) {
  aCardEls.forEach(function (aCardEl) {
    aCardEl.addEventListener(`click`, function (event) {
      console.log(`Clicked on a card.`)
      event.preventDefault()

      if (dialogCatalogEl) {
        const dialogBodyEl = document.querySelector(
          `[${dataElementAttr}="dialog__body"]`
        )

        if (dialogBodyEl) {
          dialogBodyEl.innerHTML = `
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, neque! Itaque beatae voluptate sit. Voluptatum, totam. Labore quia quidem unde nesciunt consectetur sequi! Dolorum, distinctio enim quas soluta sapiente optio incidunt a ex laborum. Odit laboriosam omnis adipisci accusantium nisi, magnam amet nesciunt labore maxime, quas aperiam. Nemo, tempora itaque.
                </p>
                `
        }

        dialogCatalogEl.showModal()
      }
    })
  })
}

if (dialogCatalogEl) {
  const btnCloseModalEl = document.querySelector(
    `[${dataElementAttr}="btn-close-dialog"]`
  )

  if (btnCloseModalEl) {
    btnCloseModalEl.addEventListener(`click`, function (event) {
      dialogCatalogEl.close()
    })
  }
}
