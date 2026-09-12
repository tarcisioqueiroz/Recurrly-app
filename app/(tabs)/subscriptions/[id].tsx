import {View, Text} from "react-native"
import {Link,useLocalSearchParams} from "expo-router"

const SubscriptionsDetails = () => {
    const { id } = useLocalSearchParams<{ id: String }>();
    return (
        <View>
            <Tex>Subscriptions Details:? {id}</Tex>
            <Link href='/'>Go Back</Link>
        </View>
    )
}

export default SubscriptionsDetails