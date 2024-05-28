import AuthWithProps from './types'
import BlueBox from '../BlueBox/BlueBox'
import Text from '../Text/Text'
import Row from '../Row/Row'

export default function AuthWith({ img, text }: AuthWithProps) {
    return (
        <BlueBox
            style={{
                padding: 16,
                borderColor: '#D6E7FF',
                display: 'flex',
                justifyContent: 'center'
            }}>
            <Row gap={10}>
                {img}
                <Text type='p'>{text}</Text>
            </Row>
        </BlueBox>
    )
}
