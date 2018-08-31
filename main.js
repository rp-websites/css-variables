const inputs = document.querySelectorAll('.controls input');
inputs.forEach(item => item.addEventListener('change', handleChange));
inputs.forEach(item => item.addEventListener('mousemove', handleChange));

function handleChange(){
	const suffix = this.dataset.sizing || "";
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}