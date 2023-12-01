import {useState} from 'react'

import {Container, Heading, Para, Button, Image} from './styledComponents'

const ReadMore = props => {
  const [isTrue, setToggleButton] = useState(true)
  const {reactHooksDescription} = props

  const onClickBtn = () => {
    setToggleButton(prev => !prev)
  }

  const text = isTrue
    ? reactHooksDescription.slice(0, 170)
    : reactHooksDescription
  const buttonText = isTrue ? 'Read More' : 'Read Less'
  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para>{text}</Para>
      <Button type="button" onClick={onClickBtn}>
        {buttonText}
      </Button>
    </Container>
  )
}
export default ReadMore
