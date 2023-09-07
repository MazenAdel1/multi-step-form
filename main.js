let stepContainer = document.querySelectorAll(`.step`),
  stepNumber = document.querySelectorAll(`.step-number`),
  nextButton = document.querySelectorAll(`.next-button`),
  mobileButtonsContainer = document.querySelectorAll`.mobile-buttons-container`,
  backButton = document.querySelectorAll(`.back-button`),
  forms = document.forms,
  summaryServicesContainer = document.querySelector(
    `.summary-services-container`
  );

let currentIndex = 0;

let dataObj = {
  name: "",
  email: "",
  phoneNumber: "",
  plan: "Arcade",
  planPrice: "$9/mo",
  planPeriod: {
    monthly: true,
    yearly: false,
  },
  services: {
    onlineService: {
      status: false,
      price: "",
    },
    largerStorage: {
      status: false,
      price: "",
    },
    customizableProfile: {
      status: false,
      price: "",
    },
  },
};

let moAndYrCheckbox = document.querySelector(`.mo-yr-checkbox`),
  yearlyOffers = document.querySelectorAll(`.yearly-offers`),
  monthlyOffers = document.querySelectorAll(`.monthly-offers`),
  planCards = document.querySelectorAll(`.plan-card`);

let addOns = document.querySelectorAll(`.add-ons`);

let requiredText = document.querySelectorAll(`.required-text`);

document.querySelector(`.change`).onclick = () => {
  backToPreviousPage();
  backToPreviousPage();
};

document.querySelector(`.summary-plan`).innerHTML = `${dataObj.plan} (${
  dataObj.planPeriod.monthly
    ? Object.keys(dataObj.planPeriod)[0].slice(0, 1).toUpperCase() +
      Object.keys(dataObj.planPeriod)[0].slice(1)
    : Object.keys(dataObj.planPeriod)[1].slice(0, 1).toUpperCase() +
      Object.keys(dataObj.planPeriod)[1].slice(1)
})`;

document.querySelector(
  `.summary-plan-price`
).innerHTML = `${dataObj.planPrice}`;

document.querySelector(`.total-price`).innerHTML = `${dataObj.planPrice}`;

nextButton.forEach((el) => {
  el.addEventListener(`click`, (event) => {
    event.preventDefault();
    goToNextPage();
  });
});

// check the inputs in step 1
nextButton[0].onclick = () => {
  for (let i = 0; i < 3; i++) {
    if (
      document.querySelectorAll(`form`)[0].children[i].children[1].value == ``
    ) {
      requiredText[i].classList.remove(`hidden`);
      document
        .querySelectorAll(`form`)[0]
        .children[i].children[1].classList.add(`border-strawberry-red`);
      if (currentIndex > 0) {
        backToPreviousPage();
      }
    }
    document.querySelectorAll(`form`)[0].children[i].children[1].oninput =
      () => {
        if (
          document.querySelectorAll(`form`)[0].children[i].children[1].value !=
            `` &&
          document
            .querySelectorAll(`form`)[0]
            .children[i].children[1].classList.contains(`border-strawberry-red`)
        ) {
          document
            .querySelectorAll(`form`)[0]
            .children[i].children[1].classList.remove(`border-strawberry-red`);

          requiredText[i].classList.add(`hidden`);
        }
      };
  }

  dataObj.name =
    document.querySelectorAll(`form`)[0].children[0].children[1].value;
  dataObj.email =
    document.querySelectorAll(`form`)[0].children[1].children[1].value;
  dataObj.phoneNumber =
    document.querySelectorAll(`form`)[0].children[2].children[1].value;
};

nextButton[1].onclick = () => {
  for (let i = 0; i < 3; i++) {
    if (
      document.querySelectorAll(`form`)[0].children[i].children[1].value == ``
    ) {
      requiredText[i].classList.remove(`hidden`);
      document
        .querySelectorAll(`form`)[0]
        .children[i].children[1].classList.add(`border-strawberry-red`);
      if (currentIndex > 0) {
        backToPreviousPage();
      }
    }
    document.querySelectorAll(`form`)[0].children[i].children[1].oninput =
      () => {
        if (
          document.querySelectorAll(`form`)[0].children[i].children[1].value !=
            `` &&
          document
            .querySelectorAll(`form`)[0]
            .children[i].children[1].classList.contains(`border-strawberry-red`)
        ) {
          document
            .querySelectorAll(`form`)[0]
            .children[i].children[1].classList.remove(`border-strawberry-red`);

          requiredText[i].classList.add(`hidden`);
        }
      };
  }

  dataObj.name =
    document.querySelectorAll(`form`)[0].children[0].children[1].value;
  dataObj.email =
    document.querySelectorAll(`form`)[0].children[1].children[1].value;
  dataObj.phoneNumber =
    document.querySelectorAll(`form`)[0].children[2].children[1].value;
};
//

// calculate the total price
nextButton[4].onclick = () => {
  let planPrice = getTheNumber(dataObj.planPrice);
  for (let i = 0; i < 3; i++) {
    if (Object.values(dataObj.services)[i].status) {
      planPrice += getTheNumber(Object.values(dataObj.services)[i].price);
    }
  }

  if (moAndYrCheckbox.checked) {
    document.querySelector(`.total-price`).innerHTML = `$${planPrice}/yr`;
  } else {
    document.querySelector(`.total-price`).innerHTML = `$${planPrice}/mo`;
  }
};

nextButton[5].onclick = () => {
  let planPrice = getTheNumber(dataObj.planPrice);
  for (let i = 0; i < 3; i++) {
    if (Object.values(dataObj.services)[i].status) {
      planPrice += getTheNumber(Object.values(dataObj.services)[i].price);
    }
  }

  if (moAndYrCheckbox.checked) {
    document.querySelector(`.total-price`).innerHTML = `$${planPrice}/yr`;
  } else {
    document.querySelector(`.total-price`).innerHTML = `$${planPrice}/mo`;
  }
};
//

backButton.forEach((el) => {
  el.addEventListener(`click`, (event) => {
    event.preventDefault();
    backToPreviousPage();
  });
});

// change the offers (monthly and yearly)
moAndYrCheckbox.parentElement.onclick = function () {
  if (moAndYrCheckbox.checked) {
    // appear the yearly offers
    yearlyOffers.forEach((el) => {
      el.classList.remove(`hidden`);
    });
    // hide the monthly offers
    monthlyOffers.forEach((el) => {
      el.classList.add(`hidden`);
    });

    // change the data object plans period
    dataObj.planPeriod.monthly = false;
    dataObj.planPeriod.yearly = true;

    // change the inputs values
    planCards[0].children[0].value = `$90/yr`;
    planCards[1].children[0].value = `$120/yr`;
    planCards[2].children[0].value = `$150/yr`;

    addOns[0].children[0].children[0].children[0].children[0].value = `+$10/yr`;
    addOns[1].children[0].children[0].children[0].children[0].value = `+$20/yr`;
    addOns[2].children[0].children[0].children[0].children[0].value = `+$20/yr`;
    //

    // change the data object services prices
    dataObj.services.onlineService.price = `+$10/yr`;
    dataObj.services.largerStorage.price = `+$20/yr`;
    dataObj.services.customizableProfile.price = `+$20/yr`;
    //

    // change the colors in the toggle
    document.querySelector(`.yearly`).classList.remove(`text-cool-gray`);
    document.querySelector(`.monthly`).classList.add(`text-cool-gray`);
    //

    for (let i = 0; i < 3; i++) {
      if (planCards[i].classList.contains(`border-purplish-blue`)) {
        dataObj.planPrice = planCards[i].children[0].value;
        document.querySelector(
          `.summary-plan-price`
        ).innerHTML = `${dataObj.planPrice}`;

        document.querySelector(
          `.total-price`
        ).innerHTML = `${dataObj.planPrice}`;

        // the plan name (monthly / yearly) in step 4
        document.querySelector(`.summary-plan`).innerHTML = `${dataObj.plan} (${
          dataObj.planPeriod.monthly
            ? Object.keys(dataObj.planPeriod)[0].slice(0, 1).toUpperCase() +
              Object.keys(dataObj.planPeriod)[0].slice(1)
            : Object.keys(dataObj.planPeriod)[1].slice(0, 1).toUpperCase() +
              Object.keys(dataObj.planPeriod)[1].slice(1)
        })`;
      }
    }
    //

    document
      .querySelectorAll(`.summary-services-price-monthly`)
      .forEach((el) => {
        el.classList.add(`hidden`);
      });
    document
      .querySelectorAll(`.summary-services-price-yearly`)
      .forEach((el) => {
        el.classList.remove(`hidden`);
      });

    document.querySelector(`.total-text`).textContent = `Total (per year)`;
  } else {
    // hide the yearly offers
    yearlyOffers.forEach((el) => {
      el.classList.add(`hidden`);
    });
    // appear the monthly offers
    monthlyOffers.forEach((el) => {
      el.classList.remove(`hidden`);
    });
    // change the data object plans period
    dataObj.planPeriod.monthly = true;
    dataObj.planPeriod.yearly = false;

    // change the inputs values
    planCards[0].children[0].value = `$9/mo`;
    planCards[1].children[0].value = `$12/mo`;
    planCards[2].children[0].value = `$15/mo`;

    addOns[0].children[0].children[0].children[0].children[0].value = `+$1/mo`;
    addOns[1].children[0].children[0].children[0].children[0].value = `+$2/mo`;
    addOns[2].children[0].children[0].children[0].children[0].value = `+$2/mo`;
    //

    //change the data object services prices
    dataObj.services.onlineService.price = `+$1/mo`;
    dataObj.services.largerStorage.price = `+$2/mo`;
    dataObj.services.customizableProfile.price = `+$2/mo`;
    //

    // change the colors in the toggle
    document.querySelector(`.yearly`).classList.add(`text-cool-gray`);
    document.querySelector(`.monthly`).classList.remove(`text-cool-gray`);
    //

    for (let i = 0; i < 3; i++) {
      if (planCards[i].classList.contains(`border-purplish-blue`)) {
        dataObj.planPrice = planCards[i].children[0].value;
        document.querySelector(
          `.summary-plan-price`
        ).innerHTML = `${dataObj.planPrice}`;

        document.querySelector(
          `.total-price`
        ).innerHTML = `${dataObj.planPrice}`;

        // the plan name (monthly /yearly) in step 4
        document.querySelector(`.summary-plan`).innerHTML = `${dataObj.plan} (${
          dataObj.planPeriod.monthly
            ? Object.keys(dataObj.planPeriod)[0].slice(0, 1).toUpperCase() +
              Object.keys(dataObj.planPeriod)[0].slice(1)
            : Object.keys(dataObj.planPeriod)[1].slice(0, 1).toUpperCase() +
              Object.keys(dataObj.planPeriod)[1].slice(1)
        })`;
      }
    }

    document
      .querySelectorAll(`.summary-services-price-monthly`)
      .forEach((el) => {
        el.classList.remove(`hidden`);
      });
    document
      .querySelectorAll(`.summary-services-price-yearly`)
      .forEach((el) => {
        el.classList.add(`hidden`);
      });

    document.querySelector(`.total-text`).textContent = `Total (per month)`;
  }
};
//

// style the chosen plan
planCards.forEach((el) => {
  el.addEventListener(`click`, (e) => {
    for (let i = 0; i < 3; i++) {
      if (planCards[i].classList.contains(`border-purplish-blue`)) {
        planCards[i].classList.remove(`border-purplish-blue`);
        planCards[i].classList.remove(`bg-[hsl(243deg_100%_62%/5%)]`);
      }
    }
    e.currentTarget.classList.add(`border-purplish-blue`);
    e.currentTarget.classList.add(`bg-[hsl(243deg_100%_62%/5%)]`);

    dataObj.plan = `${e.currentTarget.children[0].getAttribute(`data-plan`)}`;
    dataObj.planPrice = `${e.currentTarget.children[0].value}`;

    document.querySelector(
      `.summary-plan-price`
    ).innerHTML = `${dataObj.planPrice}`;

    document.querySelector(`.total-price`).innerHTML = `${dataObj.planPrice}`;

    if (dataObj.planPeriod.monthly) {
      document.querySelector(
        `.summary-plan`
      ).innerHTML = `${dataObj.plan} (Monthly)`;
    } else {
      document.querySelector(
        `.summary-plan`
      ).innerHTML = `${dataObj.plan} (Yearly)`;
    }
  });
});
//

// style the checked input in third page
addOns.forEach((el) => {
  el.addEventListener(`click`, (e) => {
    if (
      // check the input
      e.currentTarget.children[0].children[0].children[0].children[0].checked
      //
    ) {
      e.currentTarget.classList.add(`border-purplish-blue`);
      for (let i = 0; i < 3; i++) {
        if (addOns[i].classList.contains(`border-purplish-blue`)) {
          Object.values(dataObj.services)[i].status = true;
          Object.values(dataObj.services)[i].price =
            addOns[i].children[0].children[0].children[0].children[0].value;

          summaryServicesContainer.children[i].classList.remove(`hidden`);
          summaryServicesContainer.children[i].classList.add(`flex`);
        }
      }
    } else {
      e.currentTarget.classList.remove(`border-purplish-blue`);

      for (let i = 0; i < 3; i++) {
        if (
          // check the input
          !addOns[i].children[0].children[0].children[0].children[0].checked
          //
        ) {
          Object.values(dataObj.services)[i].status = false;
          Object.values(dataObj.services)[i].price = "";

          summaryServicesContainer.children[i].classList.add(`hidden`);
          summaryServicesContainer.children[i].classList.remove(`flex`);
        }
      }
    }
  });
});
//

function goToNextPage() {
  if (currentIndex < 4) {
    currentIndex++;
  }
  //   change the page content
  stepContainer.forEach((el) => {
    if (!el.classList.contains(`hidden`)) {
      el.classList.add(`hidden`);
    }
    if (currentIndex == 4) {
      stepContainer[currentIndex].classList.add(`flex`);
    }
    stepContainer[currentIndex].classList.remove(`hidden`);
    //
  });
  //   make the mobile buttons appear
  mobileButtonsContainer.forEach((el) => {
    if (!el.classList.contains(`hidden`)) {
      el.classList.add(`hidden`);
    }
  });
  if (currentIndex < 4) {
    mobileButtonsContainer[currentIndex].classList.remove(`hidden`);
    mobileButtonsContainer[currentIndex].classList.add(`flex`);
  }
  //
  //   increase the step number
  stepNumber.forEach((el) => {
    if (el.classList.contains(`bg-light-gray`)) {
      el.classList.remove(`bg-light-gray`);
      el.classList.remove(`text-marine-blue`);
    }
    if (currentIndex < 4) {
      stepNumber[currentIndex].classList.add(`bg-light-gray`);
      stepNumber[currentIndex].classList.add(`text-marine-blue`);
    }
  });
  //
}

function backToPreviousPage() {
  currentIndex--;
  //   change the page content
  stepContainer.forEach((el) => {
    if (!el.classList.contains(`hidden`)) {
      el.classList.add(`hidden`);
    }
    if (currentIndex == 4) {
      stepContainer[currentIndex].classList.add(`flex`);
    }
    stepContainer[currentIndex].classList.remove(`hidden`);
    //
  });
  //   make the mobile buttons appear
  mobileButtonsContainer.forEach((el) => {
    if (!el.classList.contains(`hidden`)) {
      el.classList.add(`hidden`);
    }
  });
  if (currentIndex < 4) {
    mobileButtonsContainer[currentIndex].classList.remove(`hidden`);
    mobileButtonsContainer[currentIndex].classList.add(`flex`);
  }
  //
  //   decrease the step number
  stepNumber.forEach((el) => {
    if (el.classList.contains(`bg-light-gray`)) {
      el.classList.remove(`bg-light-gray`);
      el.classList.remove(`text-marine-blue`);
    }
    if (currentIndex < 4) {
      stepNumber[currentIndex].classList.add(`bg-light-gray`);
      stepNumber[currentIndex].classList.add(`text-marine-blue`);
    }
  });
  //
}

function getTheNumber(string) {
  let matches = string.match(/(\d+)/);

  return +matches[0];
}
