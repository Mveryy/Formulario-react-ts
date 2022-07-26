import FormContainer from "./components/FormContainer";
import Title from "./components/Title";

export default function App() {
  return (
    <div className="flex flex-col px-6 py-16 h-fit max-w-5xl items-center lg:flex-row lg:h-screen lg:justify-center lg:max-w-full lg:mx-16 lg:gap-4 xl:gap-12 xl:mx-20 xl:justify-center">
      <Title />
      <FormContainer />
    </div>
  )
}