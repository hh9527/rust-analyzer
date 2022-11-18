window.SIDEBAR_ITEMS = {"enum":[["DelimiterKind",""],["ExpandError",""],["Origin",""],["ParseError",""],["TopEntryPoint","Parse the whole of the input as a given syntactic construct."]],"fn":[["parse_exprs_with_sep","Split token tree with separate expr: $($e:expr)SEP*"],["parse_to_token_tree","Convert a string to a `TokenTree`"],["syntax_node_to_token_tree","Convert the syntax node to a `TokenTree` (what macro will consume)."],["syntax_node_to_token_tree_with_modifications","Convert the syntax node to a `TokenTree` (what macro will consume) with the censored range excluded."],["token_tree_to_syntax_node",""]],"struct":[["DeclarativeMacro","This struct contains AST for a single `macro_rules` definition. What might be very confusing is that AST has almost exactly the same shape as `tt::TokenTree`, but there’s a crucial difference: in macro rules, `$ident` and `$()*` have special meaning (see `Var` and `Repeat` data structures)"],["Delimiter",""],["Punct",""],["Shift",""],["SyntheticToken",""],["SyntheticTokenId",""],["TokenMap","Maps `tt::TokenId` to the relative range of the original token."],["ValueResult",""]],"type":[["ExpandResult",""]]};