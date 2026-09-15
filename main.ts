basic.showNumber(input.temperature())
if (input.temperature() < 30) {
    basic.showIcon(IconNames.Umbrella)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
} else {
    basic.showIcon(IconNames.TShirt)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
}
