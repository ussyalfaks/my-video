import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

const Scene4 = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	return (
		<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0' }}>
			<div style={{ opacity, fontSize: '40px', color: 'black', textAlign: 'center' }}>
				<p>Part 3: Your Diet is F___</p>
				<p>We operate in a system with inputs like food and sleep, and outputs like performance.</p>
				<p>If your inputs are poor, your outputs will suffer.</p>
			</div>
		</AbsoluteFill>
	);
};

export default Scene4;
