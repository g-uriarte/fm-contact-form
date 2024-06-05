import { FC } from "react"
import { ContactFormPage } from "./pages/ContactFormPage"

export const App: FC = () => {
	return (
		<div className="h-screen w-screen" >
			<ContactFormPage />
		</div>
	)
}