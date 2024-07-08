import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { selectReviews } from '../store/reviewsSlice.ts';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { LANGUAGES, PAGE_SIZE } from './constants.ts';
import { Stack } from '@mui/material';

interface Props {
  reviews: { name: string; review: string; date: string }[];
  language: 'ru' | 'en';
}

interface State {
  currentPage: number;
}

class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentPage: 1 };
  }

  handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    this.setState({ currentPage: page });
  };

  formatName(name: string): string {
    const [lastName, firstName] = name.split(' ');
    return `${lastName} ${firstName[0]}.`;
  }

  renderReviews() {
    const { currentPage } = this.state;
    const start = (currentPage - 1) * PAGE_SIZE;
    const reviews = this.props.reviews.slice(start, start + PAGE_SIZE);

    return reviews.map((review, index) => (
      <Stack key={index} gap={1}>
        <Typography variant="h6">{this.formatName(review.name)}</Typography>
        <Typography>{review.review}</Typography>
        <Typography variant="caption">{review.date}</Typography>
      </Stack>
    ));
  }

  renderPagination() {
    const totalPages = Math.ceil(this.props.reviews.length / PAGE_SIZE / LANGUAGES.length);
    return (
      <Pagination
        count={totalPages}
        page={this.state.currentPage}
        onChange={this.handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    );
  }

  render() {
    return (
      <Stack p={2} gap={4}>
        {this.props.reviews.length > 0 ? (
          <>
            {this.renderReviews()}
            {this.renderPagination()}
          </>
        ) : (
          <Typography variant="h6">No reviews available</Typography>
        )}
      </Stack>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: { language: 'ru' | 'en' }) => {
  return {
    reviews: selectReviews(state, ownProps.language),
  };
};

export default connect(mapStateToProps)(Main);
