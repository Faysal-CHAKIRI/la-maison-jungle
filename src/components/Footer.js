import '../styles/Footer.css'
import { useState } from 'react'


function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
        else{
            alert("Merci pour votre inscription, on vous contacterai dans les 2 jours prochain 😇") 
        }
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
            🌿🌱🌵 Pour les passionné·es de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input placeholder='Entrez votre mail' value={inputValue} onChange={handleInput} />
			<br/>
            <button onClick={handleBlur}>Confirmer</button>
		</footer>
	)
}

export default Footer

