import { FC } from "react"
import { ContactFormPage } from "./pages/ContactFormPage"
import { Toaster } from "sonner"

export const App: FC = () => {
	return (
		<div className="h-screen w-screen" >
			<ContactFormPage />
			<Toaster />
		</div>
	)
}