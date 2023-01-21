const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);

const data = {
  run: ["23-01", "24-01", "25-01", "26-01", "27-01"],
  water: ["23-01", "24-01", "25-01", "26-01", "27-01"],
  food: ["23-01", "24-01", "25-01", "26-01", "27-01"],
  journal: ["23-01", "24-01", "25-01", "26-01", "27-01"],
  takePills: ["23-01", "24-01", "25-01", "26-01", "27-01"]
}

nlwSetup.setData(data); 
nlwSetup.load();