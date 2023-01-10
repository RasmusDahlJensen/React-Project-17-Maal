import styles from "./form.module.scss";

export const Form = () => {
	return (
		<div className={styles.formcontainer} id="kontakt">
			<div className={styles.formflex}>
				<div>
					<img
						src={require("../../../assets/img/UN-Logo-Large.png")}
						alt="Site logo"
					/>
				</div>
				<form className={styles.formarea}>
					<div>
						<input
							type="text"
							name="fullname"
							id="fullname"
							class="inputs"
							placeholder="Indtast dit fulde navn"
						></input>
					</div>
					<div>
						<input
							type="text"
							name="email"
							id="email"
							class="inputs"
							placeholder="Indtast gyldig E-mail"
						></input>
					</div>
					<div>
						<input
							type="text"
							name="phone"
							id="phone"
							class="inputs"
							placeholder="Indtast Telefonnummer"
						></input>
					</div>
					<div className={styles.textareacontainer}>
						<textarea
							name="comment"
							id="comment"
							cols="30"
							rows="10"
							placeholder="Evt. besked"
						></textarea>
					</div>
					<div className={styles.buttonarea}>
						<button type="reset" className={styles.btnReset}>
							Fortryd
						</button>
						<button type="button" className={styles.btnSubmit}>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
