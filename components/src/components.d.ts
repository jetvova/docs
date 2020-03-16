/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ChooserKey,
  ChooserType,
} from './components/chooser/chooser';
import {
  ChooserKey as ChooserKey1,
  ChooserType as ChooserType1,
} from './components/chooser/chooser';

export namespace Components {
  interface PulumiChoosable {
    'selection': ChooserKey;
    'type': ChooserType;
    'value': ChooserKey;
  }
  interface PulumiChooser {
    'options': string;
    'selection': ChooserKey;
    'type': ChooserType;
  }
  interface PulumiExample {}
  interface PulumiExamples {}
  interface PulumiRoot {}
}

declare global {


  interface HTMLPulumiChoosableElement extends Components.PulumiChoosable, HTMLStencilElement {}
  var HTMLPulumiChoosableElement: {
    prototype: HTMLPulumiChoosableElement;
    new (): HTMLPulumiChoosableElement;
  };

  interface HTMLPulumiChooserElement extends Components.PulumiChooser, HTMLStencilElement {}
  var HTMLPulumiChooserElement: {
    prototype: HTMLPulumiChooserElement;
    new (): HTMLPulumiChooserElement;
  };

  interface HTMLPulumiExampleElement extends Components.PulumiExample, HTMLStencilElement {}
  var HTMLPulumiExampleElement: {
    prototype: HTMLPulumiExampleElement;
    new (): HTMLPulumiExampleElement;
  };

  interface HTMLPulumiExamplesElement extends Components.PulumiExamples, HTMLStencilElement {}
  var HTMLPulumiExamplesElement: {
    prototype: HTMLPulumiExamplesElement;
    new (): HTMLPulumiExamplesElement;
  };

  interface HTMLPulumiRootElement extends Components.PulumiRoot, HTMLStencilElement {}
  var HTMLPulumiRootElement: {
    prototype: HTMLPulumiRootElement;
    new (): HTMLPulumiRootElement;
  };
  interface HTMLElementTagNameMap {
    'pulumi-choosable': HTMLPulumiChoosableElement;
    'pulumi-chooser': HTMLPulumiChooserElement;
    'pulumi-example': HTMLPulumiExampleElement;
    'pulumi-examples': HTMLPulumiExamplesElement;
    'pulumi-root': HTMLPulumiRootElement;
  }
}

declare namespace LocalJSX {
  interface PulumiChoosable {
    'selection'?: ChooserKey;
    'type'?: ChooserType;
    'value'?: ChooserKey;
  }
  interface PulumiChooser {
    'options'?: string;
    'selection'?: ChooserKey;
    'type'?: ChooserType;
  }
  interface PulumiExample {}
  interface PulumiExamples {}
  interface PulumiRoot {
    'onRendered'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'pulumi-choosable': PulumiChoosable;
    'pulumi-chooser': PulumiChooser;
    'pulumi-example': PulumiExample;
    'pulumi-examples': PulumiExamples;
    'pulumi-root': PulumiRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pulumi-choosable': LocalJSX.PulumiChoosable & JSXBase.HTMLAttributes<HTMLPulumiChoosableElement>;
      'pulumi-chooser': LocalJSX.PulumiChooser & JSXBase.HTMLAttributes<HTMLPulumiChooserElement>;
      'pulumi-example': LocalJSX.PulumiExample & JSXBase.HTMLAttributes<HTMLPulumiExampleElement>;
      'pulumi-examples': LocalJSX.PulumiExamples & JSXBase.HTMLAttributes<HTMLPulumiExamplesElement>;
      'pulumi-root': LocalJSX.PulumiRoot & JSXBase.HTMLAttributes<HTMLPulumiRootElement>;
    }
  }
}


