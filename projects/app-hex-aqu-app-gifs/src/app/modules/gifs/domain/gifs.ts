/**
 * Domain -  implementar sus clases y logica como Update Create o Delete
 */
import {
  Analytics,
  Cta,
  Gif,
  Images,
  Rating,
  SourceTLD,
  TrendingDatetimeEnum,
  Type,
  User,
} from '../interfaces/gifs.interface';

export type GrifsProps = Gif; // temporal
export class Girfs {
  private type: Type = Type.GIF;
  private readonly id!: string;
  private readonly url!: string;
  private slug!: string;
  private bitly_gif_url!: string;
  private bitly_url!: string;
  private embed_url!: string;
  private username!: string;
  private source!: string;
  private title!: string;
  private rating: Rating;
  private content_url!: string;
  private source_tld: SourceTLD;
  private source_post_url!: string;
  private is_sticker!: number;
  private import_datetime!: Date;
  private trending_datetime: Date | TrendingDatetimeEnum;
  public images: Images;
  private analytics_response_payload!: string;
  private analytics: Analytics;
  private user?: User;
  private cta?: Cta;

  constructor(
    Prop: GrifsProps,
    tld: SourceTLD,
    trendingDatetime: Date | TrendingDatetimeEnum,
    _images: Images,
    _analytics: Analytics,
    _user: User,
    _cta: Cta,
    _rating:Rating,
  ) {
    Object.assign(this, Prop);
    this.source_tld = tld;
    this.trending_datetime = trendingDatetime;
    this.images = _images;
    this.analytics = _analytics;
    this.rating=_rating
  }
  Properties(): GrifsProps {
    return Object.assign({}, this) as unknown as GrifsProps;
  }
}
