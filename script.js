let form = document.getElementById("form");

const meter_inputs_list = document.querySelectorAll(".meter_input");
const meter_inputs = [...meter_inputs_list];

const meter_amounts_list = document.querySelectorAll(".meter_amount>span");
const meter_amounts = [...meter_amounts_list];

const meter_amounts_p_list = document.querySelectorAll(".meter_amount");
const meter_amounts_p = [...meter_amounts_p_list];

const info = document.getElementById("info");
const unit_rate = document.getElementById("unit_rate");
const total_units = document.getElementById("total_units");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const bill_amount = parseFloat(document.getElementById("bill_amount").value);

  const total_reading = meter_inputs.reduce(
    (a, v) => a + parseFloat(v.value),
    0.0
  );

  const per_unit_price = bill_amount / total_reading;

  if (isNaN(per_unit_price)) {
    alert("Enter valid data.");
    return;
  }

  for (let i = 0; i < meter_amounts.length; i++) {
    const meter_units = parseFloat(meter_inputs[i].value);
    const to_pay = (per_unit_price * meter_units).toFixed(2);

    meter_amounts[i].innerText = "₹" + to_pay;
  }

  for (let i = 0; i < meter_amounts.length; i++) {
    meter_amounts_p[i].style.visibility = "visible";
    meter_amounts_p[i].style.opacity = 1;
  }

  total_units.innerText = "Total units: " + total_reading;
  unit_rate.innerText = "Price per unit: ₹" + per_unit_price.toFixed(2);

  info.style.visibility = "visible";
  info.style.opacity = 1;
});
