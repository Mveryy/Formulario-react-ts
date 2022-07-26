import Form from "./Form";

export default function FormContainer() {
  return (
    <div>
      <div className="text-white bg-[#6055a5] px-6 py-4 text-center rounded-md mb-6 cursor-pointer hover:bg-[#4c3da0] transition-all dropShadow"><span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter</div>
      <Form />
    </div>
  )
}