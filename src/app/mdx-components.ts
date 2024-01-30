import { A as a } from "@/app/(blog)/Components/a";
import { P as p } from "@/app/(blog)/Components/p";
import { H1 as h1 } from "@/app/(blog)/Components/h1";
import { H2 as h2 } from "@/app/(blog)/Components/h2";
import { H3 as h3 } from "@/app/(blog)/Components/h3";
import { OL as ol } from "@/app/(blog)/Components/ol";
import { UL as ul } from "@/app/(blog)/Components/ul";
import { LI as li } from "@/app/(blog)/Components/li";
import { HR as hr } from "@/app/(blog)/Components/hr";
import { Code as code } from "@/app/(blog)/Components/code";
import { Tweet } from "@/app/(blog)/Components/tweet";
//import { Image } from "@/app/PostComponents/image";
import { Figure } from "@/app/(blog)/Components/figure";
import { Snippet } from "@/app/(blog)/Components/snippet";
import { Caption } from "@/app/(blog)/Components/caption";
import { Callout } from "@/app/(blog)/Components/callout";
import { YouTube } from "@/app/(blog)/Components/youtube";
import { Ref, FootNotes, FootNote } from "@/app/(blog)/Components/footnotes";
import { Blockquote as blockquote } from "@/app/(blog)/Components/blockquote";

export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    code,
    pre: Snippet,
    //  img: Image,
    blockquote,
    Tweet,
    //    Image,
    Figure,
    Snippet,
    Caption,
    Callout,
    YouTube,
    Ref,
    FootNotes,
    FootNote,
  };
}
