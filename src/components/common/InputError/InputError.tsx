
type Props = {
    message: string | undefined
}

function InputError({message}: Props) {
  return (
      <div className="relativ">
          <p className="absolute text-red-500 text-[0.7rem]">{message}</p>
    </div>
  )
}

export default InputError