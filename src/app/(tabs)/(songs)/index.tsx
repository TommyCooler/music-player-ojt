import library from '@/assets/data/library.json'
import { TracksList } from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { trackTitleFilter } from '@/helpers/filter'
import { useNaviagationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { useMemo } from 'react'
import { ScrollView, View } from 'react-native'

const SongsScreen = () => {
	const search = useNaviagationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

	const filteredTracks = useMemo(() => {
		if (!search) return library

		return library.filter(trackTitleFilter(search))
	}, [search])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList tracks={filteredTracks} scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
