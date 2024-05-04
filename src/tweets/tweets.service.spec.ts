import { Test, TestingModule } from '@nestjs/testing';
import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  let service: TweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsService],
    }).compile();

    service = module.get<TweetsService>(TweetsService);
  });

  describe('createTweet', () => {
    it('should create tweet', () => {
      // Arrange
      service.tweets = [];
      const payload = 'This is my tweet';

      // Act
      const tweet = service.createTweet(payload);

      // Assert
      expect(tweet).toBe(payload);
      expect(service.tweets).toHaveLength(1);
    });

    it('get returns tweets', () => {
      const tweets = service.getTweets();
      expect(tweets).toHaveLength(tweets.length);
    });

    // it('should prevent tweets created which are over 100 characters', () => {
    //   const payload =
    //     'should prevent tweets created which are over 100 characters,should prevent tweets created which are over 100 characters,should prevent tweets created which are over 100 characters';
    //   const tweet = service.createTweet(payload);
    //   expect(tweet).toThrowError();
    // });

    it('show throw an error if the tweet does not exist', () => {
      service.tweets = ['hello world'];

      const tweet = () => service.deleteTweet(1);

      expect(tweet).toThrowError();
    });
  });
});
