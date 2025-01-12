import { unknownTrackImageUri } from '@/constants/images'
import { defaultStyles } from '@/styles'
import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Track, useActiveTrack } from 'react-native-track-player'
import { PlayPauseButton, SkipToNextButton } from './PlayerControls'

export const FloatingPlayer = ({ style }: ViewProps) => {
	const activeTrack = useActiveTrack()

	if (!activeTrack) return null

	const displayedTrack: Track = activeTrack ?? {
		title: 'This is just a song',
	}

	return (
		<TouchableOpacity>
			<FastImage
				source={{
					uri: displayedTrack.artwork ?? unknownTrackImageUri,
				}}
				style={styles.trackArtworkImage}
			/>
			<View style={styles.trackTitleContainer}>
				<Text style={styles.trackTitle}>{displayedTrack.title}</Text>
			</View>
			<View style={styles.trackControlsContainer}>
				<PlayPauseButton iconSize={24} />
				<SkipToNextButton iconSize={22} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	trackArtworkImage: {
		width: 40,
		height: 40,
		borderRadius: 8,
	},
	trackTitle: {
		...defaultStyles.text,
		fontSize: 18,
		fontWeight: '600',
		paddingLeft: 10,
	},
	trackTitleContainer: {
		flex: 1,
		overflow: 'hidden',
		marginLeft: 10,
	},
	trackControlsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20,
		marginRight: 16,
		marginLeft: 16,
	},
})
