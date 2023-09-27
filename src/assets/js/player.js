import Plyr from "./libs/plyr.min.js";

// Plyr.js is used
// const playerSettings = {
// 	controls: [
// 		"play-large",
// 		"play",
// 		"progress",
// 		"current-time",
// 		"mute",
// 		"volume",
// 		"fullscreen",
// 	],
// 	volume: 1,
// };

// Setup the player
// const player = new Plyr("#player", playerSettings);

/*
Если нужно кастомизировать плеер

	https://github.com/sampotts/plyr/blob/master/README.md#html

	1. Создаём файл .scss в /blocks.
	2. Настройка плеера (Пример)
	:root {
		--plyr-color-main: #1ac266;
	}



Показать / Скрыть элементы управления
	"play-large", // The large play button in the center
	"restart", // Restart playback
	"rewind", // Rewind by the seek time (default 10 seconds)
	"play", // Play/pause playback
	"fast-forward", // Fast forward by the seek time (default 10 seconds)
	"progress", // The progress bar and scrubber for playback and buffering
	"current-time", // The current time of playback
	"duration", // The full duration of the media
	"mute", // Toggle mute
	"volume", // Volume control
	"captions", // Toggle captions
	"settings", // Settings menu
	"pip", // Picture-in-picture (currently Safari only)
	"airplay", // Airplay (currently Safari only)
	"download", // Show a download button with a link to either the current source or a custom URL you specify in your options
	"fullscreen", // Toggle fullscreen

		<div class="video">
			<div class="video__wrap">
				<div class="video__block w-embed">
					<video
						class="video-content"
						id="player"
						playsinline
						controls
						data-poster="./assets/images/gallery/03.jpg"
					>
						<source src="./assets/images/sample.mp4" type="video/mp4" />
						<source src="/path/to/video.webm" type="video/webm" />
						<track
							kind="captions"
							label="English captions"
							src="/path/to/captions.vtt"
							srclang="en"
							default
						/>
					</video>
				</div>
			</div>
		</div>;
*/
