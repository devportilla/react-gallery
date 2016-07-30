import LazyImage from "components/LazyImage/LazyImage";

describe(
    'Lazy Image Component', () => {
        it(
            'Should import the component correctly', () => {
                expect(LazyImage).not.toBe(null);
            }
        );
    }
);
